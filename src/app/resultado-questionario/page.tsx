"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/img.result.png";
import { Title } from "@/components/title";

export default function ResultadoQuestionario() {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-center w-[100vw]">
      <Title />
      <div className="relative text-black max-w-[45rem] flex flex-col gap-6">
        <h2 className="flex justify-start font-bold text-xl">Parabéns!</h2>

        <h3 className="text-xl font-semibold text-gray-500">
          O resultado do seu teste é:
        </h3>

        <p className="text-lg font-semibold text-justify mb-8">
          O tipo de
          <span className="text-primary">Líder de Alta Performance</span>. Você
          é um guia estratégico e emocional para sua equipe. Inspira pelo
          exemplo, constrói um ambiente de trabalho saudável e está sempre em
          busca de inovação e melhorias, garantindo que todos à sua volta
          estejam engajados em um propósito maior e coletivo. Essa combinação de
          habilidades permite que promova resultados excepcionais, que vão além
          de metas e objetivos, alcançando um impacto profundo na vida dos
          colaboradores e no sucesso da organização.
        </p>
        <div className="flex justify-center mb-8">
          <img className="w-2/3 h-auto rounded" src={image.src} alt="imagem do resultado" />
        </div>
        <small>Clique no botão abaixo para baixar o resulado em PDF:</small>
        <div className="flex justify-center items-center ">
          <CustomButton onClick={() => {}}>Download</CustomButton>
        </div>
      </div>
    </div>
  );
}
