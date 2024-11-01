"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/img.result.png";
import { Title } from "@/components/title";
import Image from "next/image";
import { useSearchParams } from "next/navigation";


export default function ResultadoQuestionario() {
  const searchParams = useSearchParams();
  const resultCategoryFromQuery = searchParams.get('resultCategory');



  return (
    <div className="py-10 px-4 sm:px-8 md:py-24 flex flex-col items-center justify-center text-center w-full">
      <Title />
      <div className="text-black max-w-3xl flex flex-col gap-6 px-4 sm:px-8">
        <h2 className="flex justify-start font-bold text-lg sm:text-xl">Parabéns!</h2>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-500">
          O resultado do seu teste é:
        </h3>

        <p className="text-base sm:text-lg font-semibold text-justify mb-8">
          O tipo de
          <span className="text-primary ml-2">{resultCategoryFromQuery}</span>. Você
          é um guia estratégico e emocional para sua equipe. Inspira pelo
          exemplo, constrói um ambiente de trabalho saudável e está sempre em
          busca de inovação e melhorias, garantindo que todos à sua volta
          estejam engajados em um propósito maior e coletivo. Essa combinação de
          habilidades permite que promova resultados excepcionais, que vão além
          de metas e objetivos, alcançando um impacto profundo na vida dos
          colaboradores e no sucesso da organização.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            className="rounded max-w-full"
            src={image.src}
            alt="imagem do resultado"
            width={500}
            height={250}
          />
        </div>
        <small className="text-sm text-gray-600">Clique no botão abaixo para baixar o resultado em PDF:</small>
        <div className="flex justify-center items-center mt-4">
          <CustomButton onClick={() => { }}>Download</CustomButton>
        </div>
      </div>
    </div>
  );
}
