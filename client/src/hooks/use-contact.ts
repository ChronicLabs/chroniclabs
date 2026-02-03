import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { InsertContactMessage } from "@shared/schema";
import { z } from "zod";

export function useCreateContactMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Validate data before sending using the shared schema
      // This is defensive programming to ensure we match the API contract
      const validated = api.contact.create.input.parse(data);

      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData = await res.json();
          // Try to parse with the error schema
          const error = api.contact.create.responses[400].safeParse(errorData);
          if (error.success) {
             throw new Error(error.data.message);
          }
        }
        throw new Error("Failed to send transmission.");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "TRANSMISSION_RECEIVED",
        description: "Your message has been uploaded to the mainframe.",
        className: "bg-black border border-[#00FF41] text-[#00FF41] font-mono",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION_FAILED",
        description: error.message,
        variant: "destructive",
        className: "bg-black border border-red-500 text-red-500 font-mono",
      });
    },
  });
}
