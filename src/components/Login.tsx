import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, TLoginSchema } from "../lib/types";
import { useState } from "react";
import FormButton from "../components/FormButton";
import FormTitle from "../components/FormTitle";
import Header from "../components/Header";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data: FormData) {
    if (login(data.email, data.password)) {
      navigate("/dashboard");
      reset();
    } else {
      setError("E-mail ou senha inválidos!");
    }
  }

  return (
    <div className=" bg-background flex flex-col items-center justify-center  min-h-screen" >
      <Header/>
      <form data-aos="fade-down"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 bg-card text-copy-primary rounded-lg min-w-80"
      >
        <FormTitle>Login</FormTitle>
        {error && <p className="text-red-500">{error}</p>}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          autoFocus
          className="mt-2 text-zinc-700 p-2 border rounded w-full"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="mt-2 text-zinc-700 text-card p-2 border rounded w-full"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <FormButton isSubmitting={isSubmitting}>Continue</FormButton>

        <p className="mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
