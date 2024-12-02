"use client";
import React, { FormEvent, Suspense, useEffect, useState } from "react";
import data from "../../lib/data.json";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "@/components/button/custom-button";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { ConfirmDialog } from "@/components/confirmDialog";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Vortex } from "react-loader-spinner";
import { useSession } from "../../../contexts/user-context";
import { supabase } from "@/lib/supabaseClient";


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

const questions: Question[] = data.flatMap(
  (item) => item.questions
) as Question[];

export default function TesteLideranca() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <QuestionarioContent />
    </Suspense>
  );
}

function QuestionarioContent() {
  const { control, handleSubmit, watch, setValue } = useForm<FormData>();
  const [currentPage, setCurrentPage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageUrl = Number(searchParams.get("page"));

  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    pageUrl * questionsPerPage,
    pageUrl * questionsPerPage + questionsPerPage
  );


  // Calcula o progresso baseado nas perguntas respondidas
  const totalAnswered = questions.filter(
    (question) =>
      watch(`question${question.id}`) !== undefined &&
      watch(`question${question.id}`) !== ""
  ).length;

  const progress = (totalAnswered / questions.length) * 100; // Progresso total, baseado no número total de perguntas
  const { id } = useSession();
  const userId = id;

  useEffect(() => {
    if (currentPage === 0) {
      const savedPage = localStorage.getItem("currentPage");
      if (savedPage) {
        setCurrentPage(parseInt(savedPage, 10));
      }
    }
  }, [currentPage]);

  // Recupera o valor da página na URL ao carregar
  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    const pageFromURL = parseInt(searchParams.get("page") || "0", 10);
    setCurrentPage(pageFromURL);

    // Garante que a página seja válida e dentro do intervalo
    const pageToSet =
      !isNaN(pageFromURL) && pageFromURL >= 0 && pageFromURL < totalPages
        ? pageFromURL
        : savedPage
          ? parseInt(savedPage, 10)
          : 0;

    setCurrentPage(pageToSet);

  }, [searchParams, totalPages]);

  const currentThemeIndex = Math.floor(
    currentPage / (data[0].questions.length / questionsPerPage)
  );
  const currentTheme = data[currentThemeIndex]?.theme || "Tema não disponível";

  useEffect(() => {
    const savedData: { [key: string]: string } = JSON.parse(
      localStorage.getItem("formData") || "{}"
    );
    Object.keys(savedData).forEach((key) => {
      const value = savedData[key];
      if (typeof value === "string") {
        setValue(key, value);
      }
    });
  }, [setValue]);

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (!pageParam || isNaN(pageUrl)) {
      router.replace(`/questionario?page=0`);
      localStorage.setItem("currentPage", "0");
      setCurrentPage(0);
    } else {
      const pageToSet =
        !isNaN(pageUrl) && pageUrl >= 0 && pageUrl < totalPages
          ? pageUrl
          : 0; // Se o valor estiver errado, cai para a primeira página

      setCurrentPage(pageToSet);
    }
  }, [searchParams, pageUrl, totalPages, router]);


  const saveResponseToLocalStorage = (fieldName: string, value: string) => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    savedData[fieldName] = value;
    localStorage.setItem("formData", JSON.stringify(savedData));
    localStorage.setItem("currentPage", currentPage.toString());
  };

  const handleNextPage = () => {
    const incompleteQuestionIds = isPageComplete();
    if (incompleteQuestionIds === null) {
      saveResponsesToLocalStorage();
      const nextPage = pageUrl + 1;
      router.push(`/questionario?page=${nextPage}`);
      localStorage.setItem("currentPage", nextPage.toString()); // Atualiza o localStorage
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast({
        title: "Perguntas incompletas",
        description: `Você não respondeu às seguintes perguntas: ${incompleteQuestionIds
          .map((q) => q.id)
          .join(", ")}.`,
        className:
          "flex w-full max-w-sm py-5 px-6 bg-white rounded-xl border border-gray-200 shadow-sm mb-4 gap-4",
        role: "alert",
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      const prevPage = currentPage - 1;
      router.push(`/questionario?page=${prevPage}`);
      localStorage.setItem("currentPage", prevPage.toString()); // Atualiza o localStorage
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isPageComplete = () => {
    const incompleteQuestions = currentQuestions
      .filter((question) => !watch(`question${question.id}`))
      .map((question) => ({ id: question.id, text: question.question }));

    return incompleteQuestions.length > 0 ? incompleteQuestions : null;
  };

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem("currentPage", currentPage.toString());
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [currentPage]);

  const onSubmit = async (formData: FormData) => {
    let totalScore = 0;
    for (const key in formData) {
      const question = questions.find((q) => `question${q.id}` === key);
      const option = question?.options.find(
        (opt) => opt.value === formData[key]
      );
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


    const { data, error } = await supabase.from("results").insert([
      {
        user_id: userId,
        score: totalScore,
        category: resultCategory,
        created_at: new Date().toISOString(),
      },
    ]);

    console.log(data);
    console.log(error);

    const encodedResultCategory = encodeURIComponent(
      resultCategory || "Liderança não determinada"
    );
    localStorage.removeItem("responses");
    router.push(
      `/resultado-questionario?resultCategory=${encodedResultCategory}`
    );
    localStorage.removeItem("formData");
  };

  const handleSubmitDialog = (e?: FormEvent) => {
    e?.preventDefault();
    setIsLoading(true); // Ativa o carregamento
    handleSubmit(onSubmit)();
    setIsDialogOpen(false);
  };

  const confirmAction = () => {
    setIsDialogOpen(true);
  };

  const saveResponsesToLocalStorage = () => {
    const responses: FormData = {};
    currentQuestions.forEach((question) => {
      const response = watch(`question${question.id}`);
      if (response) {
        responses[`question${question.id}`] = response;
      }
    });
    localStorage.setItem("responses", JSON.stringify(responses));
  };


  return (
    <div className="flex justify-center items-center h-full py-24 min-h-screen">
      <div className="bg-[#f9f9f9] shadow-lg rounded-lg p-8 w-full max-w-screen-md relative">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center text-center text-lg font-semibold w-full ">
            Enviando... Aguarde.
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
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <h1 className="text-2xl font-bold text-center mb-8 text-primary">
              Teste de Liderança - PRO Lidera Skills
            </h1>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-purple-400">
              Tema: {currentTheme}
            </span>

            <div className="w-full h-2 bg-gray-300 rounded-full mt-4">
              <motion.div
                className="h-full bg-purple-600 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-right mt-2">
              {totalAnswered} de 18 questões respondidas
            </div>

            <div className="space-y-6">
              {currentQuestions.map((question) => (
                <div
                  key={question.id}
                  className="bg-white shadow-lg rounded-lg p-4 mb-6 space-y-4"
                >
                  <h2 className="text-xl text-primary font-bold">
                    Pergunta {question.id}
                  </h2>
                  <h3 className="font-semibold text-base">
                    {question.question}
                  </h3>
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
                            onChange={(e) => {
                              field.onChange(e);
                              saveResponseToLocalStorage(
                                `question${question.id}`,
                                e.target.value
                              );
                            }}
                            className="mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor={`question${question.id}_option${option.id}`}
                            className="text-gray-700 cursor-pointer"
                          >
                            {option.value}
                          </label>
                        </div>
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              {currentPage > 0 && (
                <CustomButton type="button" onClick={handlePreviousPage}>
                  Anterior
                </CustomButton>
              )}

              {currentPage < totalPages - 1 ? (
                <CustomButton type="button" onClick={handleNextPage}>
                  Próximo
                </CustomButton>
              ) : (
                <CustomButton onClick={confirmAction} className="text-white">
                  Enviar
                </CustomButton>
              )}
            </div>

            <ConfirmDialog
              isOpen={isDialogOpen}
              onConfirm={handleSubmitDialog}
              onCancel={() => setIsDialogOpen(false)}
              onClose={() => setIsDialogOpen(false)}
              confirmButtonLabel="Confirmar"
              icon={<ExclamationTriangleIcon className="h-6 w-6" />}
              title="Confirmação de Envio"
              message="Tem certeza de que deseja enviar o formulário? Após o envio, não será possível alterar as respostas."
            />
          </form>
        )}
      </div>
    </div>
  );
}
