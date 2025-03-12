"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address.").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message should be at least 10 characters.",
  }),
});

export function ProfileForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("clicked", data);

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
          }
        )
        .then(
          () => {
            toast.success(`Thanks ${data.name}, I'll be in touch.`);
            form.reset();
          },
          (error) => {
            toast.error(
              "Email failed to send. If this continues, try using the contact link below."
            ); 
            console.error("Email send error:", error);
          }
        );
    }
  };


  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-3/3 space-y-6"
      >
        <div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-700">Name</FormLabel>
              <FormControl>
              <div className="mt-1">
                <Input
                  className="appearance-none rounded-half relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                  {...field}
                />
                </div>
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />
        </div>
        <div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
              <FormControl>
              <div className="mt-1">
                <Input
                  className="appearance-none rounded-half relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  {...field}
                />
                </div>
              </FormControl>
              <FormMessage className="text-xs text-red-600" />
            </FormItem>
          )}
        />
        </div>
        <div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel 
                className="block text-sm font-medium text-gray-700">Message</FormLabel>
              <FormControl>
              <div className="mt-1">
                <Textarea
                  className="appearance-none rounded-half relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Type your message here."
                  {...field}
                />
                </div>
              </FormControl>
              <FormMessage 
                className="text-xs text-red-600" />
            </FormItem>
          )}
        />
        </div>
        <Button 
          type="submit" 
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Send{" "}
        </Button>
      </form>
    </Form>
  );
}
