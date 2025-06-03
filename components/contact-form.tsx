"use client";

import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_3502w3h", // Your EmailJS service ID
        "template_rsgmhqo", // Your EmailJS template ID
        formRef.current!,
        "z8cS4P76dF0PqmPUQ", // Your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset the form
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS Error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="border-primary/20 focus-visible:ring-primary"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="border-primary/20 focus-visible:ring-primary"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="min-h-[120px] border-primary/20 focus-visible:ring-primary"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
      >
        <span className="absolute inset-0 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-500 ease-out"></span>
        <span className="relative flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </span>
      </Button>
    </form>
  );
}
