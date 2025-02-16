import { TSignUpSchema, signUpSchema } from "../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import FormTitle from "../components/FormTitle";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const { register: authRegister } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data: TSignUpSchema) {
    authRegister(data.name, data.email, data.password);
    if (!errors.email && !errors.password) {
      reset();
      navigate("/dashboard");
    }
  }

  return (
    <div className="bg-background flex flex-col items-center justify-center min-h-screen"  >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 bg-card text-copy-primary rounded-lg min-w-80" data-aos="fade-up"
      >
        <FormTitle>Register</FormTitle>
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          autoFocus
          className="mt-2 p-2 border rounded w-full text-zinc-700"
        />
        {errors.name && (
          <p className="text-red-500">{`${errors.name?.message}`}</p>
        )}

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="mt-2 p-2 border rounded w-full text-zinc-700"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Senha"
          className="mt-2 p-2 border rounded w-full text-zinc-700"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="mt-2 p-2 border rounded w-full text-zinc-700"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}

        <FormButton isSubmitting={isSubmitting}>Continue</FormButton>

        <p className="mt-4">
          Already have an account?{" "}
          <a href="/" className="text-blue-500">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
