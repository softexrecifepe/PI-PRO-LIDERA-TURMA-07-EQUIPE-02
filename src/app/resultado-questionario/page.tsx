"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/img.result.png";
import { Title } from "@/components/title";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ResultadoQuestionario() {
  const searchParams = useSearchParams();
  const resultCategoryFromQuery = searchParams.get('resultCategory');

  // Objeto que mapeia categorias de resultado para mensagens dinâmicas
  const resultMessages: { [key: string]: string } = {
    "Liderança frágil e pouco trabalhada": "Você está apenas começando a desenvolver suas habilidades de liderança. É importante focar em autoconhecimento e na construção de relacionamentos dentro da equipe. Considere investir tempo em treinamentos e em feedbacks constantes.",
    "Liderança em desenvolvimento": "Você está no caminho certo! Suas habilidades de liderança estão em crescimento e isso é um bom sinal. Continue a praticar a empatia e a comunicação clara, e busque oportunidades de liderança em projetos.",
    "Líder de alta performance": "Parabéns! Você é um líder inspirador e eficaz. Sua capacidade de engajar sua equipe e promover um ambiente colaborativo é excepcional. Continue a buscar inovações e a desenvolver sua equipe para alcançar resultados ainda melhores.",
  };

  // Obtém a mensagem correspondente à categoria de resultado
  const resultMessage = resultMessages[resultCategoryFromQuery as string] || "Resultado não encontrado.";

  return (
    <Suspense>
      <div className="py-10 px-4 sm:px-8 md:py-24 flex flex-col items-center justify-center text-center w-full">
        <Title />
        <div className="text-black max-w-3xl flex flex-col gap-6 px-4 sm:px-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-500">
            O resultado do seu teste é:
          </h3>

          <p className="text-base sm:text-lg font-semibold text-justify mb-8">
            O tipo de
            <span className="text-primary ml-2">{resultCategoryFromQuery}</span>. {resultMessage}
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
    </Suspense>
  );
}
