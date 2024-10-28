"use client";
import image from "@/assets/images/img.login.png";
import imageline from "@/assets/images/img.linha.horizontal.png";
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { CiUser } from "react-icons/ci";

export default function Login() {
  return (
    <div className="cadastro flex gap-20 ">
      <section>
        <div className="imagem">
          <img src={image.src} alt="" />
        </div>
      </section>
      <section className="flex flex-col pt-52">
        <div className="funcionalidades flex flex-col gap-5">
          <h1 className="mt-11 font-bold text-primary">FAZER LOGIN</h1>
          <Input
            type="text"
            placeholder="E-mail, CPF ou CNPJ"
            className="border border-black w-80"
            required
          />
          <Input
            type="text"
            placeholder="Senha"
            className="border border-black w-80"
            required
          />
          <CustomButton
            onClick={() => {}}
            className="text-white w-80 flex items-center justify-center gap-x-3 shadow-lg"
          >
            <Link href={"/questionario"}>Entrar</Link>
          </CustomButton>
          <div>
            <div style={{ textAlign: "right" }} className="">
              <h2
                style={{
                  color: "#2B2D43",
                  textDecoration: "underline",
                  opacity: 0.7,
                }}
              >
                Esqueceu a senha?
              </h2>
            </div>
          </div>

          <div className="imagem">
            <Separator className="border border-primary" />
          </div>
          <div>
            <h2 className="text-textColor">
              Quero acessar com minhas redes sociais
            </h2>
          </div>
          <div>
            <CustomButton
              className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
              onClick={() => {}}
            >
              <FcGoogle /> Google
            </CustomButton>
          </div>
          <div>
            <CustomButton
              className="w-80 flex items-center justify-center gap-x-3 shadow-lg"
              onClick={() => {}}
            >
              <FaFacebook className="text-[#1d2c4c]" /> Facebook
            </CustomButton>
          </div>
          <div>
            <div className="flex gap-3 items-center justify-center">
              <div className="flex items-center">
                <h2 className="text-textColor">
                  Novo no PRO
                  <br />
                  Lidera Skils
                </h2>{" "}
                <br />
              </div>
              <div>
                <CustomButton
                  onClick={() => {}}
                  className="text-primary w-fit bg-transparent hover:text-white"
                >
                  <Link href={"/cadastro"}>CADASTRE-SE</Link>
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
