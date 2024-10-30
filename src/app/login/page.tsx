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
    <div className="flex mt-16">
      <section className="hidden md:flex w-1/2 relative">
        <Image src={image.src} alt="Imagem de Login" fill />
      </section>
      <section className="w-full md:w-[50vw] p-4 md:p-8 flex flex-col items-center justify-center mx-8">
        <div className="flex flex-col items-center gap-5 w-80">
          <h1 className="font-bold text-primary">FAZER LOGIN</h1>
          <Input
            type="email"
            placeholder="E-mail"
            className="border border-black w-80"
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            className="border border-black w-80"
            required
          />
          <Link href={"/instrucoes"}>
            <CustomButton
              onClick={() => {}}
              className="text-white w-80 flex items-center justify-center gap-x-3 shadow-lg"
            >
              Entrar
            </CustomButton>
          </Link>

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
            className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
            onClick={() => {}}
          >
            <FcGoogle /> Google
          </CustomButton>
          <CustomButton
            className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
            onClick={() => {}}
          >
            <FaFacebook className="text-[#1d2c4c]" /> Facebook
          </CustomButton>
          <div className="flex items-center gap-3 justify-center mt-5">
            <div className="flex items-center">
              <h2 className="text-textColor text-center mr-2">
                Novo no PRO <br /> Lidera Skills
              </h2>
              <div>
                <Link href={"/cadastro"}>
                  <CustomButton
                    onClick={() => {}}
                    className="text-primary w-fit bg-transparent hover:text-white"
                  >
                    CADASTRE-SE{" "}
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
