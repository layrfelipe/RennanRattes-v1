import React from "react";
import { Link } from "react-router-dom";

import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

import { FaUser, FaHandHoldingHeart, FaBullseye } from "react-icons/fa";

export default function Servicos() {
  const windowWidth = window.innerWidth;

  return (
    <>
      <TopHeader />
      <Header />
      <div className="below-header">
        <h1>Início &#62; Serviços</h1>
      </div>

      <div className="servicos-container">
        <div className="therapies">
          <div className="therapy">
            <div className="therapy-header">
              <FaUser
                size={
                  windowWidth < 600
                    ? 70
                    : windowWidth < 900
                    ? 80
                    : windowWidth < 1200
                    ? 65
                    : windowWidth < 1500
                    ? 70
                    : windowWidth < 1800
                    ? 75
                    : windowWidth < 2100
                    ? 80
                    : windowWidth < 2400
                    ? 85
                    : 100
                }
                className="icon"
              />
              <h1>Terapia individual</h1>
              <p>Atendimento online e presencial</p>
            </div>

            <hr />

            <div className="problems">
              <ul className="list">
                <li className="item">
                  Embarque numa jornada de autoconhecimento profundo
                </li>
                <li className="item">
                  Supere traumas do passado que te perseguem até hoje
                </li>
                <li className="item">
                  Aprenda a identificar seus gatilhos emocionais
                </li>
                <li className="item">
                  Desenvolva sua comunicação e seja mais assertivo
                </li>
                <li className="item">
                  Divida suas angústias num espaço só seu
                </li>
                <li className="item">
                  Saiba como identificar relacionamentos abusivos
                </li>
                <li className="item">
                  Ofereça a melhor versão de si a quem convive com você
                </li>
              </ul>

              <button className="button">
                <Link className="link" to="/contato">
                  Me identifiquei!
                </Link>
              </button>
            </div>
          </div>

          <div className="therapy">
            <div className="therapy-header">
              <FaHandHoldingHeart
                size={
                  windowWidth < 600
                    ? 70
                    : windowWidth < 900
                    ? 80
                    : windowWidth < 1200
                    ? 65
                    : windowWidth < 1500
                    ? 70
                    : windowWidth < 1800
                    ? 75
                    : windowWidth < 2100
                    ? 80
                    : windowWidth < 2400
                    ? 85
                    : 100
                }
                className="icon"
              />
              <h1>Terapia p/ casal</h1>
              <p>Atendimento online e presencial</p>
            </div>

            <hr />

            <div className="problems">
              <ul className="list">
                <li className="item">
                  Discuta sua relação num ambiente neutro e mediado pelo terapeuta
                </li>
                <li className="item">
                  Aprenda os pilares da comunicação não-violenta
                </li>
                <li className="item">
                  Crie empatia para reconhecer os limites do parceiro
                </li>
                <li className="item">
                  Evite o desgaste da relação com conversas que sempre acabam em brigas
                </li>
                <li className="item">
                  Trace metas e objetivos em comum para fortalecer a relação
                </li>
                <li className="item">
                  Aumente o nível de intimidade do casal
                </li>
                <li className="item">
                  Desfrute de mais prazer nas relações sexuais
                </li>
              </ul>

              <button className="button">
                <Link className="link" to="/contato">
                  Nos identificamos!
                </Link>
              </button>
            </div>
          </div>

          <div className="therapy">
            <div className="therapy-header">
              <FaBullseye
                size={
                  windowWidth < 600
                    ? 70
                    : windowWidth < 900
                    ? 80
                    : windowWidth < 1200
                    ? 65
                    : windowWidth < 1500
                    ? 70
                    : windowWidth < 1800
                    ? 75
                    : windowWidth < 2100
                    ? 80
                    : windowWidth < 2400
                    ? 85
                    : 100
                }
                className="icon"
              />
              <h1>Hipnoterapia</h1>
              <p>Atendimento presencial</p>
            </div>

            <hr />

            <div className="problems">
              <ul className="list">
                <li className="item">
                  Entre em relaxamento profundo para obter maior assimilação
                </li>
                <li className="item">
                  Amplie a consciência sobre si e seu estado psíquico
                </li>
                <li className="item">
                  Largue vícios com mais facilidade
                </li>
                <li className="item">
                  Resolva suas questões de insônia com a hipnose
                </li>
                <li className="item">
                  Mude sua consciência sem efeitos colaterais
                </li>
                <li className="item">
                  Resultados mais rápidos e maior eficácia do que métodos convencionais
                </li>
                <li className="item">
                  Técnicas em conjunto com a Terapia Cognitivo Comportamental
                </li>
              </ul>

              <button className="button">
                <Link className="link" to="/contato">
                  Me identifiquei!
                </Link>
              </button>
            </div>
          </div>
        </div>

        <h2 className="form-title">
          Entre em contato, tire suas dúvidas e conte comigo para cuidar da sua
          saúde mental!
        </h2>

        <div className="form-container">
          <form className="form" action="https://formsubmit.co/rennanrattespsi@gmail.com" method="POST">
            <input type="hidden" name="_next" value="https://rennanrattespsi.com.br/" />
            <input type="hidden" name="_subject" value="Novo lead!" />
            <input type="hidden" name="_autoresponse" value="Olá! Passando para confirmar que seu e-mail foi recebido e logo retornarei o contato. Abraços, Rennan Rattes!"/>
            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="Nome" placeholder="Seu nome" />

            <input type="email" name="E-mail" placeholder="Seu melhor e-mail" />

            <textarea
              name="Mensagem"
              placeholder="Mensagem"
              maxLength={250}
            ></textarea>

            <input className="btn" type="submit" value="Enviar" />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
