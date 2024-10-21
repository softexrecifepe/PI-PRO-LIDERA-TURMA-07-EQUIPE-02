"use client";
import { CustomButton } from "../button/custom-button";
import image from "@/assets/images/main-image.png"; 

export function Main() {
  return (
    <main>
      <section
        className="relative w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${image.src})`, 
        }}
      >
        <div className="absolute top-16 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.25)]"></div>
        <div className="relative text-white mb-32 text-justify w-[35%] ml-16 flex flex-col gap-6 z-10">
          <h2 className="text-4xl text-[var(--primary-color)] font-medium">
            Descubra seu potencial!
          </h2>
          <p className="text-lg font-semibold text-[var(--text-color)] mb-10">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>
          <div className="flex justify-evenly items-center gap-32">
            <CustomButton onClick={() => {}}>Entrar</CustomButton>
            <CustomButton onClick={() => {}}>Criar Conta</CustomButton>
          </div>
        </div>
      </section>
    </main>
  );
}
