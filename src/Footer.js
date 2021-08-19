// import logo from './logo.svg';
import Accordion from './Accordion';
// import './Footer.scss';
import './typography.css';
import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

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
    
    const StyledFooter = styled.footer`
        background-color: black;
        color: white;
        padding: 30px 40px;
        @media only screen and (max-width: 768px){
            padding: 30px 40px;
            display: grid;
            grid-template-areas: 
            "top"
            "middle"
            "bottom"
            ;

        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            
            display: grid;
            grid-template-areas: 
            "middle top"
            "bottom top"
            ;
        }
        @media screen and (min-width: 1024px) {
            display: grid;
            grid-template-areas: 
            "middle bottom top";
        }
    `
    const FooterItem = styled.div`

        @media screen and (min-width: 768px) and (max-width: 1024px) {

        }
        @media screen and (min-width: 1024px) {
            margin-left: 138px;

        }


    `
    const FooterItemMiddle = styled(FooterItem)`
        grid-area: middle;
    
    `
    const FooterItemBottom = styled(FooterItem)`
        grid-area: bottom;
    
    `

    return (
    <StyledFooter>

        {/* <div className="social-links footer-item-top">
            
        </div> */}
        <SocialLinks></SocialLinks>
        
        <FooterItemMiddle className="footer-item footer-item-middle">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx<=3 ? 
                <Accordion name={el} links={FooterInfo[el]}/> : 
                false
            ))} 
        </FooterItemMiddle>
        <FooterItemBottom className="footer-item footer-item-bottom">
            {Object.keys(FooterInfo).map((el, idx) => (
                idx>3 ? 
                <Accordion name={el} links={FooterInfo[el]}/> : 
                false
            ))}
        </FooterItemBottom>

    </StyledFooter>
  );
}

export default Footer;
