"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Contact</h1>
      {submitted ? (
        <div className="rounded-xl border p-6 bg-secondary">
          <p>Thanks for reaching out! I’ll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input id="name" className="w-full rounded-md border bg-background px-3 py-2" {...register("name")} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input id="email" className="w-full rounded-md border bg-background px-3 py-2" {...register("email")} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea id="message" rows={5} className="w-full rounded-md border bg-background px-3 py-2" {...register("message")} />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2 shadow hover:shadow-md disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      )}

      <div className="mt-10 flex gap-4">
        <Link href="https://github.com/soham518" className="inline-flex items-center gap-2 rounded-full border px-4 py-2" target="_blank">
          <Github className="h-4 w-4" /> GitHub
        </Link>
        <Link href="http://www.linkedin.com/in/soham-dachawar-94146a278" className="inline-flex items-center gap-2 rounded-full border px-4 py-2" target="_blank">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </Link>
        <Link href="https://twitter.com/" className="inline-flex items-center gap-2 rounded-full border px-4 py-2" target="_blank">
          <Twitter className="h-4 w-4" /> Twitter
        </Link>
      </div>
    </div>
  );
}


