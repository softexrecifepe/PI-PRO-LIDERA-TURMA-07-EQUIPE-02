"use client";
import { GoDotFill } from "react-icons/go";
import { CustomButton } from "@/components/button/custom-button";
import Link from "next/link";

export default function Intrucoes() {
  return (
    <div className="p-24 text-justify">
      <div className=" mb-6">
        <h2 className="flex justify-center items-center text-primary text-2xl font-bold mb-10">
          Teste de Liderança - PRO Lidera Skills
        </h2>
        <p className="font-semibold text-xl">
          Olá
          <span className=" text-primary font-semibold text-xl ml-2">
            Pessoa
          </span>
          ,
        </p>
      </div>
      <span className="font-bold text-xl">Instruções!</span>
      <p className="text-xl mt-10 mb-8 ">
        &nbsp;&nbsp;&nbsp;&nbsp;O teste contém 18 perguntas, após respondê-lo você receberá
        um dos três resultados possíveis: “Liderança Frágil e pouco trabalhada”
        , “Liderança em Desenvolvimento” , “Liderança de alta performace” ,
        juntamente com uma análise do seu desempenho. Deve responder a todas as
        perguntas. Tente ser o mais honesto possível. A precisão dos resultados
        depende da exatidão de suas respostas. O tempo não é uma restrição. Não
        existem respostas certas ou erradas.
      </p>
      <p className="text-xl mb-8 ">
        Você está prestes a inicializar o teste de liderança da PRO Lidera
        Skills. Está é uma página de acompanhamento da sua avaliação. Aqui vão
        algumas dicas:
      </p>
      <div className="text-xl ">
        <div className="flex gap-2 items-center">
          <GoDotFill />
          <p>Verifique a sua conexão com a internet antes de iniciar</p>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <GoDotFill />
          <p>
            Fique atento(a): caso você saia do teste após iniciado, ao retornar
            ele estará na página em que parou.
          </p>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <GoDotFill /> <p>Busque um lugar calmo e livre de perturbações</p>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <GoDotFill />
          <p>Faça os testes, preferencialmente, pelo computador</p>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <GoDotFill />
          <p>
            Caso alguma página, imagem ou texto não carregue, clique no botão
            &quot;Atualizar&quot; do seu navegador para carregá-la novamente.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <CustomButton className="text-white" onClick={() => {}}>
          <Link href={"/questionario"}>Iniciar Teste</Link>
        </CustomButton>
      </div>
    </div>
  );
}
