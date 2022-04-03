import React from "react";

import "./styles.css";

import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const windowWidth = window.innerWidth;
  const iconSizes = [20, 25, 30, 20, 25, 40, 45];

  return (
    <>
      <div className="footer-container">
        <h2>Fale comigo</h2>

        <div className="whatsapp">
          <FaWhatsapp
            size={
              windowWidth < 600
                ? iconSizes[0]
                : windowWidth < 900
                ? iconSizes[1]
                : windowWidth < 1200
                ? iconSizes[2]
                : windowWidth < 1500
                ? iconSizes[3]
                : windowWidth < 1800
                ? iconSizes[4]
                : windowWidth < 2100
                ? iconSizes[5]
                : iconSizes[6]
            }
            className="icon"
          />
          <p>(21) 98357-8629</p>
        </div>

        <div className="mail">
          <FaEnvelope
            size={
              windowWidth < 600
                ? iconSizes[0]
                : windowWidth < 900
                ? iconSizes[1]
                : windowWidth < 1200
                ? iconSizes[2]
                : windowWidth < 1500
                ? iconSizes[3]
                : windowWidth < 1800
                ? iconSizes[4]
                : windowWidth < 2100
                ? iconSizes[5]
                : iconSizes[6]
            }
            className="icon"
          />
          <p>rennanrattespsi@gmail.com</p>
        </div>

        <div className="loc">
          <FaMapMarkerAlt
            size={
              windowWidth < 600
                ? iconSizes[0]
                : windowWidth < 900
                ? iconSizes[1]
                : windowWidth < 1200
                ? iconSizes[2]
                : windowWidth < 1500
                ? iconSizes[3]
                : windowWidth < 1800
                ? iconSizes[4]
                : windowWidth < 2100
                ? iconSizes[5]
                : iconSizes[6]
            }
            className="icon"
          />
          <p>
            Estrada Padre Roser, 42 - Sala 1005 - Vila da Penha - Rio de Janeiro
          </p>
        </div>

        <div className="below-footer">
          <p>&#169; 2022 | Todos os direitos reservados</p>
          <p>Site desenvolvido por Layr Felipe</p>
        </div>
      </div>
    </>
  );
}
