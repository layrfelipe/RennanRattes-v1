import React from "react";

import "./styles.css";

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function TopHeader() {
  const windowWidth = window.innerWidth;
  const iconSizes = [18, 24, 22, 22, 25, 27, 32];

  return (
    <>
      <div className="top-header">
        <div className="left">
          <a href="https://api.whatsapp.com/send?phone=5521983578629">
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
          </a>
        </div>
        <div className="right">
          <p>Siga-me nas redes sociais</p>
          <div className="icons">
            <a href="https://instagram.com/rennanrattes.psi">
              <FaInstagram
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
                id="insta"
              />
            </a>
            <a href="https://www.facebook.com/RennanRattesPsi/">
              <FaFacebook
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
                id="face"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
