"use client";
import Image from "next/image";
import image from "@/assets/images/img.login.png";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <section className="hidden md:flex w-1/2 relative">
        <Image
          src={image.src}
          alt="Imagem de Login"
          fill
          className="object-cover"
        />
      </section>
      <section className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="flex flex-col items-center gap-5 w-full max-w-md">
          <h1 className="font-bold text-primary text-lg md:text-xl">
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
                onClick={() => {}}
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
            className="w-full flex items-center justify-center gap-x-3 shadow-lg"
            onClick={() => {}}
          >
            <FcGoogle /> Google
          </CustomButton>
          <CustomButton
            className="w-full flex items-center justify-center gap-x-3 shadow-lg"
            onClick={() => {}}
          >
            <FaFacebook className="text-[#1d2c4c]" /> Facebook
          </CustomButton>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3 ">
            <h2 className="text-textColor text-center">
              Novo no PRO Lidera Skills?
            </h2>
            <Link href={"/cadastro"}>
              <CustomButton
                onClick={() => {}}
                className="text-primary bg-transparent hover:text-white lg:w-40"
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
