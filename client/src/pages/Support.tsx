import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Mail, MessageSquare, AlertTriangle } from "lucide-react";

export default function Support() {
  const { mutate, isPending } = useCreateContactMessage();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Layout>
      <div className="matrix-container">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl mb-4">COMM_UPLINK</h1>
          <p className="text-[#003B00]">ESTABLISH DIRECT CONNECTION WITH SUPPORT NODES</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="matrix-card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" /> DIRECT_CHANNEL
              </h3>
              <p className="text-[#00FF41]/80 mb-2">Prefer standard protocols?</p>
              <a href="mailto:hello@chroniclabs.co" className="text-white hover:text-[#00FF41] hover:underline text-lg">
                hello@chroniclabs.co
              </a>
            </div>

            <div className="matrix-card border-l-4 border-l-[#00FF41]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> STATUS_UPDATE
              </h3>
              <p className="text-[#00FF41]/80 text-sm leading-relaxed">
                All systems operational. Average response time is currently under 24 hours. 
                Please ensure your transmission includes relevant device diagnostics if reporting a bug.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="matrix-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <MessageSquare className="w-32 h-32" />
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wider">SOURCE_EMAIL</label>
                <input
                  {...form.register("email")}
                  className="matrix-input"
                  placeholder="operator@domain.com"
                  type="email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-bold">
                    * {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold tracking-wider">TRANSMISSION_DATA</label>
                <textarea
                  {...form.register("message")}
                  className="matrix-input min-h-[150px] resize-none"
                  placeholder="Enter your query parameters here..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-xs mt-1 font-bold">
                    * {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <MatrixButton 
                  type="submit" 
                  isLoading={isPending}
                  className="w-full"
                >
                  {isPending ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
                </MatrixButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
