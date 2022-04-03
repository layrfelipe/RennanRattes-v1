import React from "react";

import TopHeader from "../../components/TopHeader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.css";

import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Contato() {
  const windowWidth = window.innerWidth;

  return (
    <>
      <TopHeader />
      <Header />

      <div className="below-header">
        <h1>Início &#62; Contato</h1>
      </div>

      <div className="contato-container">
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
              maxLength={200}
            ></textarea>

            <input className="btn" type="submit" value="Enviar" />
          </form>
        </div>
      </div>

      <div className="contact">
        <div className="info">
          <FaWhatsapp
            size={windowWidth < 1500 ? 70 : windowWidth < 2100 ? 75 : windowWidth < 2400 ? 85 : 120}
            className="icon"
          />
          <h2>WHATSAPP</h2>
          <h3>(21) 98357-8629</h3>
        </div>

        <div className="info">
          <FaMapMarkerAlt
            size={windowWidth < 1500 ? 70 : windowWidth < 2100 ? 75 : windowWidth < 2400 ? 85 : 120}
            className="icon"
          />
          <h2>ENDEREÇO</h2>
          <h3>
            Estrada Padre Roser, 42 - Sala 1005 - Vila da Penha - Rio de Janeiro
          </h3>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.987476363836!2d-43.31603508441968!3d-22.839952841233018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b72a09a2e17%3A0x18012cc048e838a7!2sRennan%20de%20Mello%20Rattes%20-%20Psic%C3%B3logo!5e0!3m2!1spt-BR!2sbr!4v1642119571729!5m2!1spt-BR!2sbr"
          width={
            windowWidth < 2100 ? "90%" : "80%"
          }
          height={
            windowWidth < 1200 ? "400" : windowWidth < 1800 ? "600" : "750"
          }
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}
