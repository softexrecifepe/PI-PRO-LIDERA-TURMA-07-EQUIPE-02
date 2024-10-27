"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/main-image.png";
import image2 from "@/assets/images/image.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section
        className="w-full h-screen bg-cover flex items-center"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.30)]"></div>

        <div className="relative text-white text-justify w-1/2 md:w-[50%] lg:w-[35%] md:ml-16 flex flex-col gap-24 md:gap-10 p-4 md:p-0">
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-medium text-[var(--primary-color)] mb-2">
            Descubra seu potencial!
          </h2>

          <p className="text-2xl md:text-lg font-semibold text-[var(--text-color)] md:mb-20 h-2 mb-2">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>

          <div className="flex flex-col md:flex-row justify-around items-center md:gap-12 text-center">
            <CustomButton className="w-32" onClick={() => {}}>
              <Link href={"/login"}>Entrar</Link>
            </CustomButton>
            <CustomButton className="w-32" onClick={() => {}}>
              <Link href={"/cadastro"}>Criar Conta</Link>
            </CustomButton>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[60vh] justify-center items-center p-6 md:p-12"
      >
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <img
            className="max-w-full h-auto lg:max-w-3xl"
            src={image2.src}
            alt="Image"
          />

          <div className="text-justify max-w-full lg:max-w-xl p-4">
            <h2 className="font-bold text-xl md:text-2xl ">
              Bem-vindo à PRO Lidera Skills
            </h2>
            <p className="text-base md:text-lg">
              É uma aplicação inovadora que proporciona a avaliação das suas
              capacidades de liderança. Nossa missão é auxiliar indivíduos a
              compreender suas habilidades de liderança para alcançar todo o seu
              potencial. Através de uma abordagem personalizada, buscamos
              promover o desenvolvimento contínuo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
