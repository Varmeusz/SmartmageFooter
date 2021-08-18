// import logo from './logo.svg';
import SocialButton from './socialButton';
import Accordion from './Accordion';
import './Footer.scss';
import React, {useState} from 'react';



function getFooterInfo(){
    return [
        "Marki Okularów",
        "Rodzaje Okularów",
        "Typ Okularów",
        "Informacje",
        "Jak zamawiać",
        "Zwroty i reklamacja",
        "Warunki zakupów"
    ]
}

function Footer() {
    const plusSign = <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.995 4.495a.7.7 0 1 0-.99-.99L8.5 7.01 4.995 3.505a.7.7 0 0 0-.99.99L7.51 8l-3.505 3.505a.7.7 0 1 0 .99.99L8.5 8.99l3.505 3.505a.7.7 0 1 0 .99-.99L9.49 8l3.505-3.505z" fill="#fff"/>
</svg>;

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
    const footerInfoDivs = Object.keys(FooterInfo).map((el) =>  (
        <>
        <div className="footer-info">{el}</div>
        {FooterInfo[el].map(link => (
            <div className="footer-info-links">{link}</div>

        ))}
        </>
    ))
    const Accordions = Object.keys(FooterInfo).map((el) => {
        <Accordion name={el} links={FooterInfo[el]}/>
    })

    const [OpenedInfo, setOpenedInfo] = useState(false);
    return (
    <footer className="wokularach-footer">
        <div className="social-links">
            <h3>Zostań z nami</h3>
            <div className="logo-container">
                <SocialButton social="Facebook"/>
                <SocialButton social="Instagram"/>
                <SocialButton social="Youtube"/>
            </div>
            <h3>Kontakt</h3>
            <a>
                <p className="contact-p">tel.</p>
                <p className="contact-p-big">22 113 44 48</p>
            </a>
            <a>
                <p className="contact-p">email:</p>
                <p className="contact-p-big">kontakt@wokularach.pl</p>
            </a>
        </div>
        <div className="footer-item">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx<3 ? <Accordion name={el} links={FooterInfo[el]}/> : false
            ))}
                
            
                
        </div>
        <div className="footer-item">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx>3 ? <Accordion name={el} links={FooterInfo[el]}/> : false
            ))}
        </div>

    </footer>
  );
}

export default Footer;
