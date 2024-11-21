"use client";
import { useState } from "react";
import Image from "next/image";
import image from "@/assets/images/sign.jpg";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError = "E-mail é obrigatório.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "E-mail inválido.";
      valid = false;
    }

    // Validação de senha
    if (!password) {
      passwordError = "Senha é obrigatória.";
      valid = false;
    } else if (password.length < 6) {
      passwordError = "A senha deve ter pelo menos 6 caracteres.";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrors({ ...errors, email: error.message });
        } else {
          console.log("Usuário logado:", data);
        }
      } catch (err) {
        console.error("Erro ao tentar fazer login:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLoginGoogle = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/instrucoes`,
        },
      });

      if (error) {
        console.error("Erro ao logar:", error.message);
      } else {
        console.log("Usuário logado com Google:", data);
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {isLoading ? (
        <div className="flex flex-col justify-center items-center text-center text-lg font-semibold w-full">
          Enviando... Aguarde.
        </div>
      ) : (
        <>
          <section className="hidden md:flex w-1/2 relative">
            <Image
              src={image.src}
              alt="Imagem de Login"
              fill
              className="object-cover bg-no-repeat"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
          </section>
          <section className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col items-center gap-5 w-full max-w-md">
              <h1 className="font-bold text-primary text-lg md:text-xl">
                FAZER LOGIN
              </h1>

              {/* Campo de E-mail */}
              <label htmlFor="email" className="text-sm font-medium">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border w-full ${errors.email ? "border-red-500" : "border-black"}`}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              {/* Campo de Senha */}
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border w-full ${errors.password ? "border-red-500" : "border-black"}`}
                required
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}

              {/* Botão de Login */}
              <CustomButton
                className="w-full flex items-center justify-center gap-x-3 shadow-lg"
                onClick={handleSubmit}
              >
                Entrar
              </CustomButton>

              {/* Links e Separador */}
              <div className="w-full text-right">
                <span className="text-textColor underline opacity-70">
                  Esqueceu a senha?
                </span>
              </div>
              <Separator className="border border-primary my-4" />

              {/* Login com Redes Sociais */}
              <h2 className="text-textColor">Quero acessar com minhas redes sociais</h2>
              <CustomButton
                className="w-full flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
                onClick={handleLoginGoogle}
              >
                <FcGoogle /> Google
              </CustomButton>
              <CustomButton
                className="w-full flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
                onClick={() => console.log("Login com Facebook")}
              >
                <FaFacebook className="text-[#1d2c4c]" /> Facebook
              </CustomButton>

              {/* Cadastro */}
              <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3">
                <h2 className="text-textColor text-center">Novo no PRO Lidera Skills?</h2>
                <Link href={"/cadastro"}>
                  <CustomButton className="text-primary bg-transparent hover:text-white lg:w-40 max-sm:text-sm">
                    CADASTRE-SE
                  </CustomButton>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
