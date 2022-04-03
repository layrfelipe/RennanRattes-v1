import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import { FaBars, FaTimes } from "react-icons/fa";

import logosm from "../../assets/logo-sm.png";
import logosmmd from "../../assets/logo-sm-md.png";
import logomd from "../../assets/logo-md.png";

export default function Header () {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const windowWidth = window.innerWidth;

    return (
        <>
            <div className="header">
                <div className="logo-nav-container">                    
                    <div className="logo-container">
                        <Link to="/" className="logo-link">
                            <img src={
                                windowWidth < 600 ?
                                logosm : windowWidth < 900 ?
                                logosmmd : windowWidth < 1200 ?
                                logosmmd : windowWidth < 1500 ?
                                logosmmd : logomd}
                                alt="Logo"
                            />
                        </Link>    
                    </div>                    

                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? ( <FaTimes size={windowWidth < 600 ?
                                        32 : windowWidth < 900 ?
                                        50 : windowWidth < 1200 ?
                                        40 : windowWidth < 1500 ?
                                        18 : windowWidth < 1800 ?
                                        20 : windowWidth < 2100 ?
                                        23 : 33}
                                    color="#366672" className="menu-icon" /> ) : ( <FaBars size={windowWidth < 600 ?
                                                                                        32 : windowWidth < 900 ?
                                                                                        50 : windowWidth < 1200 ?
                                                                                        40 : windowWidth < 1500 ?
                                                                                        18 : windowWidth < 1800 ?
                                                                                        20 : windowWidth < 2100 ?
                                                                                        23 : 33}
                                                                                    color="#366672" className="menu-icon" />)}
                    </div>

                    
                    <ul className="navbar2-list" >
                        <li className="option">
                            <Link className="link" to="/">
                                Início
                            </Link>
                        </li>
                        <li className="option">
                            <Link className="link" to="/sobre-mim">
                                Sobre mim
                            </Link>
                        </li>
                        <li className="option">
                            <Link className="link" to="/servicos">
                                Serviços
                            </Link>
                        </li>
                        <li className="option">
                            <Link className="link" to="/contato">
                                Contato
                            </Link>
                        </li>

                        <li className="option" id="cta-consulta">
                            <a href="https://api.whatsapp.com/send?phone=5521983578629" id="cta">
                                <button>Agende uma consulta</button>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="navbar">
                    <ul className={click ? "navbar-options-active" : "navbar-options-inactive"} >
                        <li className="option" onClick={closeMobileMenu}>
                            <Link className="link" to="/">
                                Início
                            </Link>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <Link className="link" to="/sobre-mim">
                                Sobre mim
                            </Link>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <Link className="link" to="/servicos">
                                Serviços
                            </Link>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <Link className="link" to="/contato">
                                Contato
                            </Link>
                        </li>

                        <li className="option" id="cta-consulta">
                            <a href="https://api.whatsapp.com/send?phone=5521983578629" id="cta">
                                <button>Agende uma consulta</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}