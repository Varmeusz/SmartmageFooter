// import logo from './logo.svg';
import Accordion from './Accordion';
// import './Footer.scss';
import './typography.css';
import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

function Footer() {
  
    const FooterInfo = {
        "Marki okularów" : [
            "Okulary Ray-Ban®",
            "Okulary Dior"
        ],
        "Rodzaj okularów": [
            "Okulary damskie",
            "Okulary męskie"
        ],
        "Typ okularów": [
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
        @media only screen and (max-width: calc(768px - 1px)){
            padding: 30px 40px;
            display: grid;
            grid-template-areas: 
            "top"
            "middle"
            "bottom"
            ;
            padding: 30px 40px;


        }
        @media screen and (min-width: 768px) and (max-width: 1439px) {
            padding: 30px 91px;
            display: grid;
            grid-template-areas: 
            "middle top"
            "bottom top"
            ;
        }
        @media screen and (min-width: 1440px) {
            padding: 30px 135px;
            display: grid;
            grid-template-columns: 348px 348px auto;
            grid-column-gap: 138px;
            grid-template-areas: 
            "middle bottom top";
        }
    `
    const FooterItem = styled.div`

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            width: 251px;
        }
        @media screen and (min-width: 1440px) {
            width: 348px;

        }


    `
    const FooterItemMiddle = styled(FooterItem)`
        grid-area: middle;
        
        @media screen and (min-width: 1024px) {
        }
    
    `
    const FooterItemBottom = styled(FooterItem)`
        grid-area: bottom;
        
        @media screen and (min-width: 1024px) {
        }
    
    `

    return (
    <StyledFooter>

        {/* <div className="social-links footer-item-top">
            
        </div> */}
        <SocialLinks></SocialLinks>
        
        <FooterItemMiddle>
            {Object.keys(FooterInfo).map((el, idx) => (
                idx<=3 ? 
                <Accordion name={el} links={FooterInfo[el]}/> : 
                false
            ))} 
        </FooterItemMiddle>
        <FooterItemBottom >
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
