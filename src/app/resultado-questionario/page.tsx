"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/img.result.png";
import { Title } from "@/components/title";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { jsPDF } from "jspdf";
import { Suspense, useCallback, useState } from "react";
import resultData from "../../lib/resultData.json";
import React from "react";
import { useSession } from "../../../contexts/user-context";

export default function ResultadoQuestionario() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResultadoContent />
    </Suspense>
  );
}

function ResultadoContent() {
  const searchParams = useSearchParams();
  const resultCategoryFromQuery = searchParams.get("resultCategory") || "";
  const { user } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mapeamento de categorias de resultado para mensagens
  const resultMessages: Record<string, string> = {
    "Liderança frágil e pouco trabalhada": resultData[0].textresult,
    "Liderança em desenvolvimento": resultData[1].textresult,
    "Líder de alta performance": resultData[2].textresult,
  };

  // Obter a mensagem correspondente
  const resultMessage =
    resultMessages[resultCategoryFromQuery] || "Resultado não encontrado.";

  // Converter imagem para base64
  const getBase64ImageFromUrl = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Falha ao carregar a imagem.");

      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = () => reject("Erro ao ler a imagem.");
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Erro ao converter imagem para base64:", error);
      setError("Erro ao carregar a imagem.");
      throw error;
    }
  };

  // Função de download de PDF
  const handleDownload = useCallback(async () => {
    if (!user?.name) {
      setError("Nome do usuário não encontrado.");
      return;
    }

    setLoading(true);
    const userName = user?.name || "Usuário";
    const doc = new jsPDF("landscape", "mm", "a4");

    try {
      const base64Image = await getBase64ImageFromUrl("/Certificado.png");

      doc.addImage(base64Image, "PNG", 0, 0, 297, 210, undefined, "FAST");
      doc.setFontSize(32).setFont("helvetica", "bold");

      // Calcular a posição do nome
      const userNameWidth = doc.getTextWidth(userName); // Largura do nome
      const userNameX = (297 - userNameWidth) / 2; // Centraliza o nome
      doc.text(userName, userNameX, 120); // Posiciona o nome no certificado

      // Ajustar a posição da categoria para começar no começo da última linha
      const categoryX = 66; // Coloca no início da página (lado esquerdo)
      const categoryY = 164; // Defina a posição Y fixa (na última linha da página)

      // Exibir a categoria de resultado na última linha
      doc.setFontSize(12).text(resultCategoryFromQuery, categoryX, categoryY);

      doc.save("resultado_teste_lideranca.pdf");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Erro ao gerar o PDF:", error);
      setError("Erro ao gerar o PDF");
    }
  }, [user, resultCategoryFromQuery]);

  return (
    <div className="py-10 px-4 sm:px-8 md:py-24 flex flex-col items-center justify-center text-center w-full">
      <Title />
      <div className="text-black max-w-3xl flex flex-col gap-6 px-4 sm:px-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-500">
          O resultado do seu teste é:
        </h3>
        <p className="text-base sm:text-lg font-semibold text-justify">
          &nbsp;O tipo de&nbsp;
          <span className="text-primary">{resultCategoryFromQuery}.</span>.
          <span className="italic leading-relaxed">
            {" "}
            {resultMessage.split(".").map((sentence, index, array) => {
              // Adiciona ponto final e quebra de linha a cada terceiro elemento
              const isThird =
                (index + 1) % 3 === 0 && index !== array.length - 1;
              return (
                <React.Fragment key={index}>
                  &nbsp;{sentence.trim()}
                  {sentence && "."}
                  {isThird && <br />}
                </React.Fragment>
              );
            })}
          </span>
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

        {error && (
          <div className="text-red-500 text-sm mt-4">
            <p>{error}</p>
          </div>
        )}

        <small className="text-sm text-gray-600">
          Clique no botão abaixo para baixar o resultado em PDF:
        </small>
        <div className="flex justify-center items-center mt-4">
          <CustomButton onClick={handleDownload} disabled={loading}>{loading ? "Gerando PDF..." : "Download"}</CustomButton>
        </div>
      </div>
    </div>
  );
}
