import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/tail/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind? Feel free to reach out. I'm always open to new
          ideas and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6 text-start">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:princewillchidi99@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    princewillchidi99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+234 (812) 711 9899"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +234 (812) 711 9899
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Asaba, Delta State.
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-start">
                Connect with me
              </h3>
              <div className=" flex text-start justify-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <a href="" target="_blank">
                    <Linkedin />
                  </a>
                </div>

                <div className="p-3 rounded-full bg-primary/10 ">
                  <a href="" target="_blank">
                    <Facebook />
                  </a>
                </div>

                <div className="p-3 rounded-full bg-primary/10 ">
                  <a href="" target="_blank">
                    <Instagram />
                  </a>
                </div>
                <div className="p-3 rounded-full bg-primary/10 ">
                  <a href="" target="_blank">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs "
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary"
                  placeholder="Chidi Princewill..."
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary"
                  placeholder="JohnDoe@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-primary resize-none"
                  placeholder="Hello..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
