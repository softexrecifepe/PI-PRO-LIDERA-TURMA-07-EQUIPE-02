"use client";
import { CustomButton } from "@/components/button/custom-button";
import image from "@/assets/images/main-image.png";
import image2 from "@/assets/images/image.png";

export default function HomePage() {
  return (
    <main>
      <section
        className="relative w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${image.src})`,
        }}
      >
        <div className="absolute top-16 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.25)]"></div>
        <div className="relative text-white mb-32 text-justify w-[35%] ml-16 flex flex-col gap-6">
          <h2 className="text-4xl text-[var(--primary-color)] font-medium">
            Descubra seu potencial!
          </h2>
          <p className="text-lg font-semibold text-[var(--text-color)] mb-10">
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>
          <div className="flex justify-evenly items-center gap-32">
            <CustomButton onClick={() => {}}>
              <a href="/login">Entrar</a>
            </CustomButton>
            <CustomButton onClick={() => {}}>
              <a href="/cadastro">Criar Conta</a>
            </CustomButton>
          </div>
        </div>
      </section>
      <section
        id="about-us"
        className="flex w-[100vw] h-[80vh] justify-start items-center"
      >
        <div className="flex bg-no-repeat">
          <img className="max-w-3xl h-fit" src={image2.src} alt="Image" />
          <div className="flex flex-col justify-center gap-6 text-justify max-w-xl">
            <h2 className="font-bold text-2xl">
              Bem-vindo à PRO Lidera Skills
            </h2>
            <p className="text-xl text-justify">
              É uma aplicação inovadora que proporciona a avaliação das suas
              capacidades de liderança. Nossa missão é auxiliar indivíduos a
              compreender suas habilidades de liderança para alcançar todo o seu
              potencial. Através de uma abordagem personalizada. Buscamos
              promover o desenvolvimento contínuo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
