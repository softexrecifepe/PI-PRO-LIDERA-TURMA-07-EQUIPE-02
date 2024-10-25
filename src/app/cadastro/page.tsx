"use client";

import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FormEvent } from "react";

export default function Cadastro() {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center my-16 flex flex-col justify-center items-center gap-4 mx-48">
        <div>
          <h1 className="mt-11 font-bold text-primary">CRIAR CONTA</h1>
          <Separator className="border border-primary w-11" />
        </div>

        <div className="flex gap-16">
          <CustomButton
            className="w-60 bg-transparent text-black border border-black shadow-lg hover hover:text-white"
            onClick={() => {}}
          >
            <Link
              href={"/cadastro"}
              className="flex items-center justify-center gap-x-3"
            >
              <FcGoogle /> Cadastrar com o Google
            </Link>
          </CustomButton>
          <CustomButton
            className="w-fit bg-transparent text-black border border-black shadow-lg hover hover:text-white"
            onClick={() => {}}
          >
            <Link
              href={"/cadastro"}
              className="flex items-center justify-center gap-x-2 "
            >
              <FaFacebook className="text-[#1d2c4c]" /> Cadastrar com o Facebook
            </Link>
          </CustomButton>
        </div>
        <div className="flex items-center gap-6">
          <Separator className="border border-primary w-60" />
          <span className="font-bold text-primary">OU</span>
          <Separator className="border border-primary w-60" />
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          <Input
            type="text"
            placeholder="Nome completo*"
            className="border border-black w-60"
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
        <div className=" font-bold text-justify flex flex-col gap-8">
          <span>(*) Campos obrigatórios</span>
          <p>
            (**) As opções “homem” e “mulher“ abrangem cisgêneros e
            transgêneros. A opção ”outros” inclui gênero fluido, não-binário,
            queer, intersexo e outras identidades de gênero. Utilize a opção
            “não especificar” caso não queira preencher esse campo ou não
            encontre a opção que mais se identifica.
          </p>
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
              Li e estou de acordo com as políticas da empresa e políticas de
              privacidade.*
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center mb-14">
            <CustomButton onClick={() => {}} className="text-white w-52">
              <Link href={"/login"}>Cadastrar</Link>
            </CustomButton>
            <Separator className="border border-primary w-52" />
            <div className="flex items-center gap-2">
              <div className="text-primary w-fit bg-transparent">
                Já possui cadastro?
              </div>
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
  );
}
