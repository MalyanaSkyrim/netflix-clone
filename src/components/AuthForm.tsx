"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "./ui/form/FormInput";
import { Form } from "./ui/form";

const authSchema = z.object({
  email: z.string().email(),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface Props {
  type: "signin" | "signup";
}

const AuthForm = ({ type }: Props) => {
  const router = useRouter();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (values: AuthFormValues) => {
    const { email } = values;

    const res = await signIn("email", {
      redirect: false,
      email,
    });

    if (res?.ok) {
      router.push("/magic-link-sent");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-semibold text-white">
          {" "}
          {type === "signin" ? "Log in" : "Sign up"}
        </h1>
        <div className="space-y-4 mt-5">
          <FormInput
            control={form.control}
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            disabled={form.formState.isSubmitting}
            isLoading={form.formState.isSubmitting}
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            {type === "signin" ? "Sign in" : "Sign up"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
