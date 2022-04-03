import React from "react";

import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

import { FaGraduationCap, FaPen, FaScroll, FaRegHandPointDown } from "react-icons/fa";

export default function Sobre() {
  const windowWidth = window.innerWidth;

  return (
    <>
      <TopHeader />
      <Header />

      <div className="below-header">
        <h1>Início &#62; Sobre mim</h1>
      </div>

      <div className="about-first-content">
        <div className="img-container" />

        <div className="about">
          <FaRegHandPointDown className="comment-icon" color="#366672" size={85} />
          <p>
            Sou psicólogo, graduado pela Universidade Veiga de Almeida, no Rio
            de Janeiro.
            
            <br />
            <br />
            
            Escolhi dedicar minha vida à psicoterapia pois acredito
            que posso trazer qualidade de vida para os meus clientes por meio de
            cuidados com a saúde mental. Não me imagino exercendo outra
            profissão, desde a juventude já imaginava que poderia transformar a
            vida das pessoas pra melhor com as técnicas da psicologia.

            <br />
            <br />
            
            Estou sempre disposto a ouvir, com plena atenção, todas as queixas
            de sofrimento psíquico no meu consultório. Eu sei que não é fácil
            começar, mas fazer terapia comigo certamente será uma das melhores
            decisões da sua vida.
            </p>
        </div>
      </div>

      <div className="about-second-content">
        <div className="about-me">
          <FaPen
            size={
              windowWidth < 600
                ? 50
                : windowWidth < 900
                ? 60
                : windowWidth < 1200
                ? 80
                : windowWidth < 1500
                ? 85
                : windowWidth < 1800
                ? 100
                : windowWidth < 2100
                ? 110
                : 120
            }
            className="icon"
            color="#366672"
          />
          <div className="text-about-me">
            <h2>Missão</h2>
            <p>
              Proporcionar aos meus clientes um atendimento humanizado, transmitindo apoio e segurança. <br /><br />
              Passar confiança e mudar a perspectiva de como encaramos as questões que causam sofrimento psíquico.
            </p>
          </div>
        </div>

        <div className="about-me">
          <FaScroll
            size={
              windowWidth < 600
                ? 50
                : windowWidth < 900
                ? 60
                : windowWidth < 1200
                ? 80
                : windowWidth < 1500
                ? 85
                : windowWidth < 1800
                ? 100
                : windowWidth < 2100
                ? 110
                : 120
            }
            className="icon"
            color="#366672"
          />
          <div className="text-about-me">
            <h2>Valores</h2>
            <p>
              Transparência absoluta <br />
              <br />
              Paciência com o seu ritmo<br />
              <br />
              Sigilo total das consultas<br />
              <br />
              Seriedade para tratar todo tipo de sofrimento psíquico <br />
            </p>
          </div>
        </div>

        <div className="about-me">
          <FaGraduationCap
            size={
              windowWidth < 600
                ? 50
                : windowWidth < 900
                ? 60
                : windowWidth < 1200
                ? 80
                : windowWidth < 1500
                ? 85
                : windowWidth < 1800
                ? 100
                : windowWidth < 2100
                ? 110
                : 120
            }
            className="icon"
            color="#366672"
          />
          <div className="text-about-me">
            <h2>Formação</h2>
            <p className="formation-info">
              Graduação em Psicologia pela UVA (RJ)
            </p>
            <p className="formation-info">
              Habilitação em Hipnoterapia em conjunto com TCC
            </p>
            <p className="formation-info">
              Treinamento de Psicoterapia aliada à jogos RPG de mesa
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
