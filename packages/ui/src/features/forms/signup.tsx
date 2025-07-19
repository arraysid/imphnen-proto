"use client";

import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { rpc } from "@packages/utils/openapi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { z } from "zod";

const signUpSchema = z
  .object({
    name: z.string().min(1, "Nama lengkap wajib diisi"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi harus sama",
    path: ["confirmPassword"],
  });

type SignUpData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const [showPW, setShowPW] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);

  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = rpc.useMutation("post", "v1/auth/sign-up/email", {
    onMutate: () => {
      console.log("mutating...");
    },
    onError: (err) => {
      console.log(err);
    },
    onSettled: (data) => {
      console.log(data);
    },
  });

  function onSubmit(data: SignUpData) {
    mutation.mutate({
      body: data,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-md space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama lengkap" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Masukkan email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPW ? "text" : "password"}
                    placeholder="Buat password"
                    {...field}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPW((v) => !v)}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    {showPW ? <LuEyeOff /> : <LuEye />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ulangi Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirmPW ? "text" : "password"}
                    placeholder="Konfirmasi password"
                    {...field}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPW((v) => !v)}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                  >
                    {showConfirmPW ? <LuEyeOff /> : <LuEye />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Daftar Sekarang
        </Button>
      </form>
    </Form>
  );
}
