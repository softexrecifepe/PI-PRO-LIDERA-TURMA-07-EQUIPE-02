"use client";
import Image from "next/image";
import image from "@/assets/images/sign.jpg";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";

export default function Login() {

  const handleLoginGoogle = async () => {
    try {
      await signIn("google", {
        redirectTo: "/instrucoes",
      });
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
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
          <h1 className="font-bold text-primary text-lg md:text-xl max-sm: pt-20 max-sm:mb-1">
            FAZER LOGIN
          </h1>
          <Input
            type="email"
            placeholder="E-mail"
            className="border border-black w-full"
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            className="border border-black w-full"
            required
          />
          <div className="w-full">
            <Link href={"/instrucoes"}>
              <CustomButton
                className="w-full flex items-center justify-center gap-x-3 shadow-lg"
                onClick={() => { }}
              >
                Entrar
              </CustomButton>
            </Link>
          </div>

          <div className="w-full text-right">
            <span className="text-textColor underline opacity-70">
              Esqueceu a senha?
            </span>
          </div>
          <Separator className="border border-primary my-4" />

          <h2 className="text-textColor">
            Quero acessar com minhas redes sociais
          </h2>

          <CustomButton
            className="w-full flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
            onClick={handleLoginGoogle}
          >
            <FcGoogle /> Google
          </CustomButton>
          <CustomButton
            className="w-full flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
            onClick={() => { }}
          >
            <FaFacebook className="text-[#1d2c4c]" /> Facebook
          </CustomButton>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3 ">
            <h2 className="text-textColor text-center">
              Novo no PRO Lidera Skills?
            </h2>
            <Link href={"/cadastro"}>
              <CustomButton
                onClick={() => { }}
                className="text-primary bg-transparent hover:text-white lg:w-40 max-sm:text-sm"
              >
                CADASTRE-SE
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
