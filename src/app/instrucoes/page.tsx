"use client";
import { GoDotFill } from "react-icons/go";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";
import { Title } from "@/components/title";

import { Vortex } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Instrucoes() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user?.user_metadata.name);
    };

    getUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, []);

  return (
    <div className="flex justify-center items-center h-full py-24 min-h-screen">
      {isLoading ? (
        <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md w-full h-full max-w-4xl">
          <div className="flex flex-col justify-center items-center text-center text-lg font-semibold">
            Carregando o questionário... Aguarde.
            <div>
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={["green", "blue", "purple", "green", "blue", "purple"]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-8 md:p-16 lg:p-24 text-justify max-w-4xl mx-auto">
          <div className="mb-6">
            <Title />
            <p className="font-semibold text-lg sm:text-xl">
              Olá
              <span className="text-primary font-semibold ml-2">{user?.user_metadata.name}</span>,
            </p>
          </div>
          <span className="font-bold text-lg sm:text-xl">Instruções!</span>
          <p className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 mb-6">
            &nbsp;&nbsp;&nbsp;&nbsp;O teste contém 18 perguntas, após respondê-lo,
            você receberá um dos três resultados possíveis: “Liderança Frágil e
            pouco trabalhada”, “Liderança em Desenvolvimento” ou “Liderança de alta
            performance”, juntamente com uma análise do seu desempenho. Responda a
            todas as perguntas com honestidade, pois a precisão dos resultados
            depende da exatidão de suas respostas. O tempo não é uma restrição, e
            não existem respostas certas ou erradas.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Você está prestes a inicializar o teste de liderança da PRO Lidera
            Skills. Esta é uma página de acompanhamento da sua avaliação. Aqui vão
            algumas dicas:
          </p>
          <div className="text-base sm:text-lg md:text-xl space-y-4">
            {[
              "Verifique a sua conexão com a internet antes de iniciar.",
              "Fique atento(a): caso você saia do teste após iniciado, ao retornar, ele estará na página em que parou.",
              "Busque um lugar calmo e livre de perturbações.",
              "Faça os testes, preferencialmente, pelo computador.",
              "Caso alguma página, imagem ou texto não carregue, clique no botão \"Atualizar\" do seu navegador para carregá-la novamente.",
            ].map((dica, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="flex items-center justify-center w-5 h-5">
                  <GoDotFill fontSize={20} />
                </div>
                <p>{dica}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-16">
            <Link href="/questionario">
              <CustomButton className="text-white" onClick={() => setIsLoading(true)}>
                Iniciar Teste
              </CustomButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
