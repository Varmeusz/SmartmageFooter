// import logo from './logo.svg';
import SocialButton from './socialButton';
import Accordion from './Accordion';
import './Footer.scss';
import React from 'react';


function Footer() {
  
    const FooterInfo = {
        "Marki Okularów" : [
            "Okulary Ray-Ban®",
            "Okulary Dior"
        ],
        "Rodzaje Okularów": [
            "Okulary damskie",
            "Okulary męskie"
        ],
        "Typ Okularów": [
            "Okulary pełne",
            "Okulary żyłka",
            "Okulary patentki"
        ],
        "Informacje": [
            "O nas",
            "Kontakt",
            "Regulamin",
            "Polityka prywatności",
            "Polityka cookies",
            "Dlaczego warto nam zaufać"
        ],
        "Jak zamawiać": [
            "Jak kupować w sklepie wOkularach.pl",
            "Krok po kroku",
            "Jak wybrać parametry szkieł?",
            "Jakie wybrać okulary",
            "Jak mierzyć PD",
            "Oferta dla firm"
        ],
        "Zwroty i reklamacja": [
            "Reklamacja",
            "Zwrot i wymiana"
        ],
        "Warunki zakupów" : [
            "Koszt wysyłki",
            "Czas realizacji",
            "Sposob dostawy"
        ]
    };

    return (
    <footer className="wokularach-footer">
        <div className="social-links footer-item-top">
            <h3>Zostań z nami</h3>
            <div className="logo-container">
                <SocialButton social="Facebook"/>
                <SocialButton social="Instagram"/>
                <SocialButton social="Youtube"/>
            </div>
            <h3>Kontakt</h3>
            <a href="#">
                <p className="contact-p">tel.</p>
                <p className="contact-p-big">22 113 44 48</p>
            </a>
            <a href="#">
                <p className="contact-p">email:</p>
                <p className="contact-p-big">kontakt@wokularach.pl</p>
            </a>
        </div>
        <div className="footer-item footer-item-middle">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx<=3 ? <Accordion name={el} links={FooterInfo[el]}/> : false
            ))} 
        </div>
        <div className="footer-item footer-item-bottom">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx>3 ? <Accordion name={el} links={FooterInfo[el]}/> : false
            ))}
        </div>

    </footer>
  );
}

export default Footer;
