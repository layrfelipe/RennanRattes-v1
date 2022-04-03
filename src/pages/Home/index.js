import React from "react";
import { Link } from "react-router-dom";

import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  FaMapMarkedAlt,
  FaUser,
  FaHandHoldingHeart,
  FaBullseye,
  FaCheck,
  FaHeartBroken,
  FaUsers,
  FaStar,
  FaQuoteRight
} from "react-icons/fa";

import "./styles.css";

export default function Home() {
  const windowWidth = window.innerWidth;
  
  return (
    <>
      <TopHeader />
      <Header />

      <div className="main-container">
        <div className="first-content">
          <h1>
            Terapia cognitivo <br /> comportamental
          </h1>
          <h2>+5000h de experiência clínica</h2>
          <a href="https://api.whatsapp.com/send?phone=5521983578629"><button className="consulta-btn">Agendar uma consulta</button></a>
        </div>

        <div className="second-content">
          <div className="first-section">
            <div className="box">
              <div className="icon">
                <FaMapMarkedAlt
                  size={
                    windowWidth < 600
                      ? 55
                      : windowWidth < 900
                      ? 90
                      : windowWidth < 1200
                      ? 65
                      : windowWidth < 1800
                      ? 85
                      : 90
                  }
                />
              </div>

              <div className="subtext">
                <h1>
                  Psicólogo <br /> no Rio de Janeiro
                </h1>
              </div>
            </div>

            <div className="img-container" />

            <div className="img-text">
              <h2>Rennan Rattes</h2>
              <p>CRP 05/54980</p>
            </div>
          </div>

          <div className="second-section">
            <div className="about">
              <div className="box">
                <div className="icon">
                  <FaMapMarkedAlt
                    size={windowWidth < 600 ? 55 : 90}
                  />
                </div>

                <div className="subtext">
                  <h1>
                    Psicólogo <br /> no Rio de Janeiro
                  </h1>
                </div>
              </div>

              <div className="text">
                <FaQuoteRight className="quote-icon" color="#366672" size={75} />
                <p>
                  Saúde mental é sobre estar bem consigo e com os outros.
                  Aceitar as exigências que a vida nos impõe.
                  <br />
                  <br />
                  Na terapia você poderá se conhecer melhor, desenvolver habilidades e criar novas estratégias para lidar com seus problemas.
                </p>
                <Link to="/sobre-mim"><button className="saiba-mais-btn">Saiba mais</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="third-content">
          <div className="services">
            <div className="service-content" id="individual">
              <FaUser
                className="icon"
                size={
                    windowWidth < 600
                    ? 55
                    : windowWidth < 900
                    ? 90
                    : windowWidth < 1200
                    ? 65
                    : windowWidth < 1500
                    ? 85
                    : windowWidth < 1800
                    ? 85
                    : windowWidth < 2100
                    ? 90
                    : windowWidth < 2400
                    ? 120
                    : 140
                }
              />
              <h1>TERAPIA INDIVIDUAL</h1>

              <div className="descriptions">
                <p>Aprenda a fazer escolhas mais conscientes</p>
                <p>Descubra as origens do seu sofrimento e crie novas estratégias para lidar com ele</p>
                <p>Todas as consultas sob sigilo terapeuta-paciente</p>
              </div>

              <button className="button">
                <Link className="link" to="/servicos">
                  Saiba mais
                </Link>
              </button>
            </div>

            <div className="service-content" id="couple">
              <FaHandHoldingHeart
                className="icon"
                size={
                  windowWidth < 600
                  ? 55
                  : windowWidth < 900
                  ? 90
                  : windowWidth < 1200
                  ? 65
                  : windowWidth < 1500
                  ? 85
                  : windowWidth < 1800
                  ? 85
                  : windowWidth < 2100
                  ? 90
                  : windowWidth < 2400
                  ? 120
                  : 140
              }
              />
              <h1>TERAPIA P/ CASAL</h1>

              <div className="descriptions">
                <p>Encontre saídas para impasses do seu relacionamento</p>
                <p>Eleve o nível da comunicação entre você e seu parceiro</p>
                <p>
                  Identifique os limites do outro e desenvolva uma relação
                  saudável
                </p>
              </div>

              <button className="button">
                <Link className="link" to="/servicos">
                  Saiba mais
                </Link>
              </button>
            </div>

            <div className="service-content" id="hipnose">
              <FaBullseye
                className="icon"
                size={
                  windowWidth < 600
                  ? 55
                  : windowWidth < 900
                  ? 90
                  : windowWidth < 1200
                  ? 65
                  : windowWidth < 1500
                  ? 85
                  : windowWidth < 1800
                  ? 85
                  : windowWidth < 2100
                  ? 90
                  : windowWidth < 2400
                  ? 120
                  : 140
              }
              />
              <h1>HIPNOTERAPIA</h1>

              <div className="descriptions">
                <p>
                  Combine sessões de hipnose com a terapia cognitivo
                  comportamental
                </p>
                <p>Confronte seus traumas e ressignifique as suas emoções</p>
                <p>
                  Acesse seu subconsciente afim de melhorar a qualidade de vida
                </p>
              </div>

              <button className="button">
                <Link className="link" to="/servicos">
                  Saiba mais
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="forth-content">
          <h1>Por que fazer terapia?</h1>
          <hr />

          <p>
            Se você acha que terapia "é para loucos", você está muito enganado
          </p>

          <p>
            Tratar a mente é um gesto de autocuidado, e todos podem se
            beneficiar disso
          </p>

          <div className="reasons">
            <div className="beautiful-box" id="1">
              <div className="icon">
                <FaCheck
                  size={
                    windowWidth < 600
                      ? 55
                      : windowWidth < 900
                      ? 85
                      : windowWidth < 1200
                      ? 65
                      : windowWidth < 1500
                      ? 80
                      : windowWidth < 1800
                      ? 80
                      : windowWidth < 2100
                      ? 65
                      : windowWidth < 2400
                      ? 90
                      : 120
                  }
                />
              </div>

              <div className="text">
                <h2>Desenvolva autoconfiança</h2>
                <p>
                  Nada melhor do que acreditar em si e saber que é capaz de
                  alcançar seus objetivos mais árduos
                </p>
              </div>
            </div>

            <div className="beautiful-box" id="2">
              <div className="icon">
                <FaHeartBroken
                  size={
                    windowWidth < 600
                      ? 55
                      : windowWidth < 900
                      ? 85
                      : windowWidth < 1200
                      ? 65
                      : windowWidth < 1500
                      ? 80
                      : windowWidth < 1800
                      ? 80
                      : windowWidth < 2100
                      ? 65
                      : windowWidth < 2400
                      ? 90
                      : 120
                  }
                />
              </div>

              <div className="text">
                <h2>Supere traumas do passado</h2>
                <p>
                  Relacionamentos tóxicos, situações desagradáveis, infâncias
                  problemáticas... Tudo isso pode ser trabalhado em terapia
                </p>
              </div>
            </div>

            <div className="beautiful-box" id="3">
              <div className="icon">
                <FaUsers
                  size={
                    windowWidth < 600
                      ? 55
                      : windowWidth < 900
                      ? 85
                      : windowWidth < 1200
                      ? 65
                      : windowWidth < 1500
                      ? 80
                      : windowWidth < 1800
                      ? 80
                      : windowWidth < 2100
                      ? 65
                      : windowWidth < 2400
                      ? 90
                      : 120
                  }
                />
              </div>

              <div className="text">
                <h2>Melhore suas habilidades sociais</h2>
                <p>
                  Na terapia você pode melhorar suas soft skills e fazer sua
                  carreira profissional decolar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fifth-content">
          <h1>Feedbacks</h1>
          <div className="boxes">
            <div className="beautiful-box">
              <div className="img-container-1"/>

              <p id="author">Jessica Silva</p>

              <div className="stars">
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
              </div>

              <p id="depo">
                "Hoje, posso dizer que seu profissionalismo comigo durante as
                sessões foi uma das melhores coisas que já aconteceram na minha
                vida..."
              </p>
            </div>

            <div className="beautiful-box">
              <div className="img-container-2" />

              <p id="author">Mario Fernando</p>

              <div className="stars">
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
              </div>

              <p id="depo">
                "Agradeci muito a ele, resolveu meus problemas! Muito bom!""
              </p>
            </div>

            <div className="beautiful-box" id="last">
              <div className="img-container-3"/>

              <p id="author">Adriana Pina</p>

              <div className="stars">
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
                <FaStar
                  size={windowWidth < 1799 ? 20 : windowWidth < 2400 ? 25 : 35}
                  className="star"
                />
              </div>

              <p id="depo">
                "Hoje me sinto muito mais confiante para lidar com minhas questões emocionais. Obrigado por tudo, Rennan!"
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
