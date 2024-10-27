"use client";

import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FormEvent } from "react";
import Image from "next/image";
import image from "@/assets/images/login.jpg";

export default function Cadastro() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex min-h-screen">
      <section className="w-full md:w-[50vw] p-4 md:p-8 flex flex-col items-center justify-center mx-8">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="font-bold text-primary text-center">
                CRIAR CONTA
              </h1>
              <Separator className="border border-primary w-11 my-2" />
            </div>
            <div className="flex flex-col md:flex-col gap-4 justify-center m-8 xl:flex-row xl:w-2/3">
              <CustomButton
                className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
                onClick={() => {}}
              >
                <FcGoogle /> Cadastrar com o Google
              </CustomButton>
              <CustomButton
                className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
                onClick={() => {}}
              >
                <FaFacebook className="text-[#1d2c4c]" /> Cadastrar com o
                Facebook
              </CustomButton>
            </div>

            <div className="flex items-center justify-center gap-6 mb-4 w-40 xl:w-[17rem]">
              <Separator className="border border-primary" />
              <span className="font-bold text-primary">OU</span>
              <Separator className="border border-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full xl:w-2/3">
              <Input
                type="text"
                placeholder="Nome completo*"
                className="border border-black"
                required
              />
              <Input
                type="email"
                placeholder="E-mail*"
                className="border border-black"
                required
              />
              <Input
                type="password"
                placeholder="Crie sua senha*"
                className="border border-black"
                required
              />
              <Input
                type="password"
                placeholder="Confirme sua senha*"
                className="border border-black"
                required
              />
            </div>

            <div className="font-bold flex flex-col gap-4 mb-4">
              <span className="flex justify-start text-sm">
                (*) Campos obrigatórios
              </span>
              <div className="flex items-center gap-3">
                <Checkbox />
                <span>
                  Quero receber ofertas e novidades por e-mail, SMS, WhatsApp ou
                  mensagens*!
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <span>
                  Li e estou de acordo com as políticas da empresa e políticas
                  de privacidade.*
                </span>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <CustomButton onClick={() => {}} className="w-52">
                  <Link href={"/login"}>Cadastrar</Link>
                </CustomButton>
                <Separator className="border border-primary w-52" />
                <div className="flex items-center gap-2">
                  <div className="text-primary">Já possui cadastro?</div>
                  <CustomButton
                    onClick={() => {}}
                    className="text-primary w-fit bg-transparent hover:text-white"
                  >
                    <Link href={"/login"}>ENTRAR</Link>
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <div className="hidden md:flex w-1/2 relative">
        <Image src={image.src} alt="imagem login" fill />
      </div>
    </div>
  );
}
