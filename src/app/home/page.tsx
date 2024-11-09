"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/main-image.png";
import image2 from "@/assets/images/rb_76463.png";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="relative w-full h-screen bg-cover flex items-center justify-center">
        <Image src={image.src} alt="Image" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.65)]"></div>

        <div className="relative text-white text-justify w-11/12 sm:w-3/4 md:w-[50%] lg:w-[35%] flex flex-col justify-center items-center gap-8 p-4 md:p-0 top-1/3 -translate-y-full z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-color)] mb-4 text-center">
            Descubra seu potencial!
          </h2>

          <p className="text-white text-base sm:text-lg lg:text-xl font-semibold text-[var(--text-color)] mb-4 sm:mb-8 text-center">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 sm:gap-8">
            <Link href={"/cadastro"}>
              <CustomButton className="w-32 sm:w-40 bg-opacity-60" onClick={() => { }}>
                Criar Conta
              </CustomButton>
            </Link>

            <Link href={"/login"}>
              <CustomButton className="w-32 sm:w-40" onClick={() => { }}>
                Entrar
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
            height={650}
            className="w-full max-w-xl h-auto"
          />

          <div className="text-justify w-full max-w-full lg:max-w-xl px-4">
            <h2 className="font-bold text-xl md:text-2xl mb-4 text-center lg:text-start">
              Bem-vindo à PRO Lidera Skills
            </h2>
            <p className="text-justify text-base sm:text-lg lg:text-base lg:text-start">
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
