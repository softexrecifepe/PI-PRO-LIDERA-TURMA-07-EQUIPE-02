"use client";

import { CustomButton } from "../button/custom-button";
import "./style.css";

export function Main() {
  return (
    <main>
      <section className="background-container">
        <div className="overlay"></div>
        <div className="content">
          <h2>Descubra seu potencial!</h2>
          <p>
            Tenha a avaliação de suas habilidades de liderança através de um
            teste especializado.
          </p>
          <div className="buttons">
            <CustomButton onClick={() => {}}>Entrar</CustomButton>
            <CustomButton onClick={() => {}}>Criar Conta</CustomButton>
          </div>
        </div>
      </section>
    </main>
  );
}
