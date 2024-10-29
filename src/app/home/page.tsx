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

        <div className="relative text-white text-justify w-1/2 md:w-[50%] lg:w-[35%] md:ml-16 flex flex-col justify-center items-center gap-24 md:gap-10 p-4 md:p-0 mb-24">
          <h2 className="flex items-start text-4xl md:text-3xl lg:text-4xl font-medium text-[var(--primary-color)] mb-2">
            Descubra seu potencial!
          </h2>

          <p className="text-2xl md:text-lg font-semibold text-[var(--text-color)] md:mb-20 h-2 w-[450px] mb-2">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>

          <div className="flex flex-col md:flex-row justify-around items-center md:gap-12">
            <Link href={"/login"}>
              <CustomButton className="w-40" onClick={() => {}}>
                Entrar
              </CustomButton>
            </Link>

            <Link href={"/cadastro"}>
              <CustomButton className="w-40" onClick={() => {}}>
                Criar Conta
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="flex lg:flex-row w-full h-auto lg:h-[60vh] justify-center items-center md:p-12"
      >
        <div className="flex lg:flex-row justify-center items-center lg:gap-12">
          <Image
            src={image2.src}
            alt="Image"
            width={800} 
            height={600}
            className="max-w-full h-auto lg:max-w-3xl"
          />

          <div className="text-justify max-w-full lg:max-w-xl">
            <h2 className="font-bold text-xl md:text-2xl mb-4">
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
