"use client";
import React, { useState } from "react";
import data from "../../lib/data.json";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "@/components/button/custom-button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type Option = {
  id: string;
  value: string;
  score: number;
};

type Question = {
  id: string;
  question: string;
  options: Option[];
};

type FormData = {
  [key: string]: string;
};

// Extrair todas as perguntas do JSON
const questions: Question[] = data.flatMap((item) => item.questions) as Question[];

export default function TesteLideranca() {
  const { control, handleSubmit, watch } = useForm<FormData>();
  const [currentPage, setCurrentPage] = useState(0);
  const { toast } = useToast();
  const router = useRouter();

  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    currentPage * questionsPerPage + questionsPerPage
  );

  const currentThemeIndex = Math.floor(currentPage / (data[0].questions.length / questionsPerPage));
  const currentTheme = data[currentThemeIndex]?.theme || "Tema não disponível";

  const handleNextPage = () => {
    if (isPageComplete()) {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    } else {
      toast({
        title: "Preencha todas as perguntas",
        description: "Por favor, responda todas as perguntas antes de continuar.",
        className: "flex w-full max-w-sm py-5 px-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-4 gap-4",
        role: "alert"
      });
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const isPageComplete = () =>
    currentQuestions.every((question) => watch(`question${question.id}`));

  const onSubmit = (formData: FormData) => {
    if (confirm("Deseja finalizar o teste?")) {
      let totalScore = 0;

      // Itera sobre as respostas para calcular a pontuação total
      for (const key in formData) {
        const question = questions.find((q) => `question${q.id}` === key);
        const option = question?.options.find((opt) => opt.value === formData[key]);
        totalScore += option ? option.score : 0;
      }

      let resultCategory;
      if (totalScore >= 18 && totalScore <= 35) {
        resultCategory = "Liderança frágil e pouco trabalhada";
      } else if (totalScore >= 36 && totalScore <= 53) {
        resultCategory = "Liderança em desenvolvimento";
      } else if (totalScore >= 54 && totalScore <= 72) {
        resultCategory = "Líder de alta performance";
      }

      const encodedResultCategory = encodeURIComponent(resultCategory || "Liderança não determinada");

      router.push(`/resultado-questionario?resultCategory=${encodedResultCategory}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-full py-24 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-md relative">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-2xl font-bold text-center mb-8 text-primary ">
            Teste de Liderança - PRO Lidera Skills
          </h1>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-purple-400 border border-purple-400">
            Tema: {currentTheme}
          </span>

          {currentQuestions.map((question) => (
            <div key={question.id} className="flex flex-col text-justify space-y-5">
              <h2 className="text-xl text-primary font-bold">
                Pergunta {question.id}
              </h2>
              <h3 className="font-semibold text-base">{question.question}</h3>
              {question.options.map((option) => (
                <Controller
                  key={option.id}
                  name={`question${question.id}`}
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div className="flex items-center">
                      <input
                        {...field}
                        type="radio"
                        id={`question${question.id}_option${option.id}`}
                        value={option.value}
                        checked={field.value === option.value}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`question${question.id}_option${option.id}`}
                        className="text-gray-700"
                      >
                        {option.value}
                      </label>
                    </div>
                  )}
                />
              ))}
            </div>
          ))}

          <div className="flex justify-between mt-8">
            {currentPage > 0 && (
              <CustomButton onClick={handlePreviousPage}>
                Anterior
              </CustomButton>
            )}
            {currentPage === 0 ? (
              <div className="relative mx-[36rem] max-sm:mx-[11.5rem]">
                <CustomButton onClick={handleNextPage}>
                  Próximo
                </CustomButton>
              </div>
            ) : currentPage < totalPages - 1 ? (
              <CustomButton onClick={handleNextPage}>
                Próximo
              </CustomButton>
            ) : (
              <CustomButton type="submit">
                Enviar
              </CustomButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
