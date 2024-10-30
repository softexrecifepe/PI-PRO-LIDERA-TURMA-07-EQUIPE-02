"use client";

import React, { useState } from "react";
import data from "../../lib/data.json";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "@/components/button/custom-button";

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

const questions: Question[] = data as Question[];

export default function TesteLideranca() {
  const { control, handleSubmit, watch } = useForm<FormData>();
  const [currentPage, setCurrentPage] = useState(0);

  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    currentPage * questionsPerPage + questionsPerPage
  );

  // Função para avançar de página se todas as perguntas estiverem respondidas
  const handleNextPage = () => {
    if (isPageComplete()) {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const isPageComplete = () =>
    currentQuestions.every((question) => watch(`question${question.id}`));

  const onSubmit = (data: FormData) => {
    console.log("Respostas enviadas:", data);
    // Aqui você pode processar ou enviar as respostas finais
  };

  return (
    <div className="flex justify-center items-center h-full py-24 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-screen-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <h1 className="text-2xl font-bold text-center mb-8 text-primary">
            Teste de Liderança - PRO Lidera Skills
          </h1>

          {currentQuestions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h1 className="text-xl text-primary font-bold">
                Pergunta {question.id}
              </h1>
              <h2 className="font-semibold text-base">{question.question}</h2>
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
            <CustomButton
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
            >
              Anterior
            </CustomButton>
            {currentPage < totalPages - 1 ? (
              <CustomButton
                onClick={handleNextPage}
                disabled={!isPageComplete()}
              >
                Próximo
              </CustomButton>
            ) : (
              <CustomButton onClick={handleSubmit(onSubmit)} disabled={false}>
                Enviar
              </CustomButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
