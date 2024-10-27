"use client";
import image from "@/assets/images/img.login.png"
import imageline from "@/assets/images/img.linha.horizontal.png"
import { Input } from "@/components/ui/input";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";

export default function Login() {
  return <> 
    <div className="cadastro flex gap-20 pt-24">
      <div className="imagem">
        <img src={image.src} alt="" />
      </div>
      <div className="funcionalidades flex flex-col gap-5">
        <h1 className="mt-11 font-bold text-primary">FAZER LOGIN</h1>
        <Input 
          type="text"
          placeholder="E-mail, CPF ou CNPJ"
          className="border border-black w-60"
          required
        />
        <Input
          type="text"
          placeholder="Senha"
          className="border border-black w-60"
          required
        />
        <CustomButton onClick={() => {}} className="text-white w-52">
              <Link href={"/questionario"}>Entrar</Link>
        </CustomButton>
        <div>
        <div style={{ textAlign: 'right' }} className="">
          <h2 style={{ color: '#2B2D43', textDecoration: 'underline', opacity: 0.7}}>Esqueceu a senha?</h2>
          </div>
        </div>
        
        <div className="imagem">
          <img src={imageline.src} alt="" />
        </div>
        <div>
          <h2 style={{ color: '#2B2D43'}}>Quero acessar com minhas redes sociais</h2>
        </div>
        <div>
              <h2>Google</h2>
            </div>
            <div>
              <h2>Facebook</h2>
            </div>
        <div>
          <div className="01 flex gap-3">
            <div>
              <h2>Novo no PRO<br/>Lidera Skils</h2> <br/>
            </div>
            <div>
              <h2>CADASTRE-SE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
