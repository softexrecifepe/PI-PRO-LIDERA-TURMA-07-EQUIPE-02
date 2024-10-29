"use client";
import { CustomButton } from "@/components/button/custom-button";
import React, { useState } from "react";
import data from "../../lib/data.json";

export default function TesteLideranca() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = data[currentQuestionIndex];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center h-full py-24">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full h-[600px] relative">
          <h1 className="flex justify-center items-center text-primary text-2xl font-bold mb-8">
            Teste de Liderança - PRO Lidera Skills
          </h1>

          <h2 className="text-xl font-semibold mb-6">
            Pergunta {currentQuestion.id}
          </h2>

          <div className="mb-6">
            <h3 className="text-xl mb-2 text-justify">
              {currentQuestion.question}
            </h3>
          </div>

          <form className="space-y-4 ">
            {currentQuestion.options.map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="radio"
                  id={`option${option.id}`}
                  name="question"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <label htmlFor={`option${option.id}`} className="text-gray-700">
                  {option.value}
                </label>
              </div>
            ))}
          </form>

          <div className="absolute flex justify-between w-full px-16 bottom-6">
            <CustomButton
              onClick={() =>
                setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0))
              }
            >
              Anterior
            </CustomButton>
            <CustomButton
              onClick={() =>
                setCurrentQuestionIndex(
                  Math.min(currentQuestionIndex + 1, data.length - 1)
                )
              }
            >
              Próximo
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
