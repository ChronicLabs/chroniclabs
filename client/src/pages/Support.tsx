import { Layout } from "@/components/Layout";
import { MatrixButton } from "@/components/MatrixButton";
import { SEO } from "@/components/SEO";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, MessageSquare, AlertTriangle, CheckCircle } from "lucide-react";

interface ContactFormData {
  email: string;
  message: string;
}

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a2642e9e-398f-49a7-8945-14b6684f0f54",
          email: data.email,
          message: data.message,
          subject: "New Contact from Defrag Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError("Transmission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Support — Chronic Labs"
        description="Get help with Defrag, Grade, or any Chronic Labs app. Contact our support team."
        canonical="https://chroniclabs.co/support"
      />
      <div className="matrix-container">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl mb-4">SYSTEM_SUPPORT</h1>
          <p className="text-[#003B00]">Encountering a system error or corrupted grid?</p>
        </header>

        <div className="max-w-lg mx-auto">
          <div className="matrix-card text-center mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> DIRECT_UPLINK
            </h3>
            <a href="mailto:hello@chroniclabs.co" className="text-white hover:text-[#00FF41] hover:underline text-lg font-bold">
              hello@chroniclabs.co
            </a>
            <p className="text-[#00FF41]/60 text-sm mt-4">
              Social: <a href="#" className="text-white hover:text-[#00FF41]">@ChronicLabs</a>
            </p>
          </div>

          {/* Form */}
          <div className="matrix-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <MessageSquare className="w-32 h-32" />
            </div>

            {isSuccess ? (
              <div className="text-center py-8 relative z-10">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-[#00FF41]" />
                <h3 className="text-xl font-bold mb-2">TRANSMISSION_COMPLETE</h3>
                <p className="text-[#00FF41]/80">Your message has been received. We'll respond soon.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm underline hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-wider">SOURCE_EMAIL</label>
                  <input
                    {...form.register("email", { required: "Email is required" })}
                    className="matrix-input"
                    placeholder="operator@domain.com"
                    type="email"
                    data-testid="input-email"
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
                    {...form.register("message", { required: "Message is required" })}
                    className="matrix-input min-h-[150px] resize-none"
                    placeholder="Enter your query parameters here..."
                    data-testid="input-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1 font-bold">
                      * {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <div className="pt-4">
                  <MatrixButton 
                    type="submit" 
                    isLoading={isSubmitting}
                    className="w-full"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
                  </MatrixButton>
                </div>
              </form>
            )}
          </div>

          <div className="text-center mt-8">
            <a href="/" className="text-[#00FF41] hover:text-white">[ BACK_TO_INTERFACE ]</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
