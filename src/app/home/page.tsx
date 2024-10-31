"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/main-image.png";
import image2 from "@/assets/images/image.png";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="relative w-full h-screen bg-cover flex items-center">
        <Image
          src={image.src}
          alt="Image"
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.30)]"></div>

        <div className="relative text-white text-justify w-11/12 sm:w-3/4 md:w-[50%] lg:w-[35%] mx-auto md:ml-16 flex flex-col justify-center items-center gap-8 p-4 md:p-0">
          <h2 className="self-start text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--primary-color)] mb-4 text-center sm:text-start">
            Descubra seu potencial!
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-semibold text-[var(--text-color)] mb-4 sm:mb-8 text-center sm:text-start">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 sm:gap-8">
            <Link href={"/login"}>
              <CustomButton className="w-32 sm:w-40" onClick={() => {}}>
                Entrar
              </CustomButton>
            </Link>

            <Link href={"/cadastro"}>
              <CustomButton className="w-32 sm:w-40" onClick={() => {}}>
                Criar Conta
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="flex flex-col lg:flex-row w-full h-auto lg:h-[60vh] justify-center items-center p-4 md:p-12"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 w-full">
          <Image
            src={image2.src}
            alt="Image"
            width={800}
            height={600}
            className="w-full max-w-xl h-auto"
          />

          <div className="text-justify w-full max-w-full lg:max-w-xl px-4">
            <h2 className="font-bold text-xl md:text-2xl mb-4 text-center lg:text-start">
              Bem-vindo à PRO Lidera Skills
            </h2>
            <p className="text-base sm:text-lg lg:text-base text-center lg:text-start">
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
