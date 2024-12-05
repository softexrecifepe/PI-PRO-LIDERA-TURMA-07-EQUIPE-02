"use client";
import { useState } from 'react';
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FormEvent } from "react";
import Image from "next/image";
import image from "@/assets/images/sign.jpg";

export default function Cadastro() {
  
// Adiciona o estado para capturar os valores dos campos
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [confirmarSenha, setConfirmarSenha] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsLoading(true);

  // Resetando erros
  setError('');

  // Validações
  if (!nome.trim()) {
    setError('O nome é obrigatório.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError('Por favor, insira um e-mail válido.');
    return;
  }
  if (senha.length < 8 || !/[0-9]/.test(senha) || !/[!@#$%^&*]/.test(senha)) {
    setError('A senha deve ter pelo menos 8 caracteres, incluindo números e caracteres especiais.');
    return;
  }
  if (senha !== confirmarSenha) {
    setError('As senhas não coincidem.');
    return;
  }

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
    } else {
      setError(data.message || 'Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro ao fazer a solicitação:', error);
    setError('Erro ao se conectar com o servidor.');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="flex min-h-screen">
      <section className="w-full md:w-[50vw] p-4 md:p-8 flex flex-col items-center justify-center mx-8">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="font-bold text-primary text-center max-sm: pt-20 max-sm:mb-1">
                CRIAR CONTA
              </h1>
              <Separator className="border border-primary w-11 my-2" />
            </div>
            <div className="flex flex-col md:flex-col gap-4 justify-center m-8 xl:flex-row xl:w-2/3">
              <CustomButton
                className="w-80 flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
                onClick={() => {}}
              >
                <FcGoogle />
                Google
              </CustomButton>
              <CustomButton
                className="w-80 flex items-center justify-center gap-x-3 shadow-lg bg-opacity-60"
                onClick={() => {}}
              >
                <FaFacebook className="text-[#1d2c4c]" />
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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border border-black"
                required
              />
              <Input
                type="email"
                placeholder="E-mail*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border ${error.includes('email') ? 'border-red-500' : 'border-black'}`}
                required
              />
              {error.includes('email') && <p className="text-red-500 text-sm">{error}</p>}
              <Input
                type="password"
                placeholder="Crie sua senha*"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border border-black"
                required
              />
              <Input
                type="password"
                placeholder="Confirme sua senha*"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="border border-black"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
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
                
                  <CustomButton onClick={() => {}} className="w-52" disabled={isLoading}>
                  {isLoading ? 'Carregando...' : 'Cadastrar'}
                  </CustomButton>     
                <Separator className="border border-primary w-52" />
                <div className="flex items-center gap-2">
                  <div className="text-primary">Já possui cadastro?</div>
                  <Link href={"/login"}>
                    <CustomButton
                      onClick={() => {}}
                      className="text-primary w-fit bg-transparent hover:text-white"
                    >
                      ENTRAR
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="hidden md:flex w-1/2 relative">
        <Image src={image.src} alt="imagem login" fill />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>
      </section>
    </div>
  );
}
