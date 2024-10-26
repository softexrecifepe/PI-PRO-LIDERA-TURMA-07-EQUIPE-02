"use client"

import { CustomButton } from "@/components/button/custom-button";
import image from "@assets/images/img.result.png";
import Link from "next/link";

export default function ResultadoQuestionario() {
  return (
    <div className="p-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-8">Teste de Liderança</h1>

      <div className="relative text-black mb-32 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-4xl text-[var(--primary-color)] font-medium">
          Parabéns!
        </h2>

        <h2 className="text-2xl font-semibold">O resultado do seu teste é:</h2>

        <p className="text-lg font-semibold">
          Eos <a href="#" style={{ color: '#007bff' }}>aspernatur omnis qui</a> iusto voluptas qui deleniti temporibus est
          tenetur laboram a galisum amet non tempore fugit sed ipsam quaerat. Sit rerum dignissimos sed minima rerum 33 
          pariatur reiciendis est ducimus reprehenderit aut dolore sint! Est galisum alias sed aliquam consequatur a 
          galisum dolor aut provident esse? Eum odio nemo ut sint nostrum 33 consequatur animi quo laboriosam nemo.
        </p>

        <div className="flex justify-center items-center mt-8">
          <CustomButton onClick={() => {}}>
            <Link href={"/resultadoquestionario"}>Download</Link>
          </CustomButton>
        </div>
      </div>

      <div className="flex justify-center mb-8"> 
        <img className="w-48 h-auto" src={"assets/image"} alt="Images" />
      </div>
    </div>
  );
}
