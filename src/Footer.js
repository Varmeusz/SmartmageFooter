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
        padding-bottom: 21px;
    `
    const FooterGrid = styled.div`
    @media only screen and (max-width: calc(768px - 1px)){
            padding: 30px 40px;
            padding-bottom: 0px;
            display: grid;
            grid-template-areas: 
            "top"
            "middle"
            "bottom"
            ;
            padding: 30px 40px;


        }
        @media screen and (min-width: 768px) and (max-width: 1439px) {
            padding: 30px 40px;
            padding-bottom: 0px;
            display: grid;
            padding-left: 91px;
            
            grid-template-columns: repeat(2, 1fr);
            column-gap: 138px;
            grid-template-areas: 
            "middle top"
            "bottom top"
            ;
        }
        @media screen and (min-width: 1440px) {
            padding: 30px 135px;
            display: grid;
            grid-template-columns: repeat(2, 30%) auto;
            grid-column-gap: 138px;
            grid-template-areas: 
            "middle bottom top";
        }
    `
    const FooterItem = styled.div`

        @media screen and (min-width: 768px) and (max-width: 1439px) {
            ${'' /* width: 251px; */}
            ${'' /* width: 100%; */}
            margin: 0;
        }
        @media screen and (min-width: 1440px) {
            ${'' /* width: 348px; */}

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
    const FooterLogo = styled.div`
        padding-top: 56px;
        max-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const SmartmageSpan = styled.span`
        opacity: 0.5;
        font-family: Rubik;
        font-size: 11px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
        padding-left: 3.6px;
    `

    const TextSpan = styled.span`
        padding-right: 11px;
        opacity: 0.5;
        font-family: Rubik;
        font-size: 11px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    `
    const SmartmageLogo = styled.div`
        opacity: 0.5;
        background-color: #fff;
    `
    const SmartmageLogoSvg = styled.svg`
        opacity: 0.5;
        fill: #fff;
    `
    return (
    <StyledFooter>

        {/* <div className="social-links footer-item-top">
            
        </div> */}
        <FooterGrid>
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

        </FooterGrid>
        <FooterLogo>
            <TextSpan>Projekt i realizacja</TextSpan>
            <div>
                <SmartmageLogoSvg width="21" height="21" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.542 9.613c.3 0 .88.738 1.77 2.194a70.916 70.916 0 012.469 4.614c.746 1.57 1.126 2.516 1.126 2.813 0 .219-.467.39-1.395.507-.943.168-2.014.25-3.218.281a66.76 66.76 0 01-3.542-.056c-.101-.027-.194-.038-.268-.056a.355.355 0 01-.16-.113c-.07-.028-.103-.094-.108-.169-.002-.09.003-.213 0-.394.032-.148.069-.348.107-.562.083-.257.167-.554.269-.9.362-1.233.621-2.158.804-2.814.138-.609.18-.925.108-.9h-.07a32.875 32.875 0 01-1.52 2.77c-.6 1.069-1.01 1.596-1.186 1.596-.217 0-.628-.538-1.235-1.596a44.94 44.94 0 01-1.492-2.77h-.097c-.072-.025-.03.291.107.9.183.655.442 1.581.805 2.813.101.346.185.644.268.9.038.215.076.415.107.563-.002.181.003.305 0 .394-.004.075-.038.14-.107.17-.06.068-.12.1-.16.112-.075.018-.167.029-.27.056-1.161.048-2.332.07-3.54.056-1.205-.03-2.276-.113-3.22-.281C.969 19.625.5 19.453.5 19.234c0-.297.38-1.244 1.127-2.813a70.92 70.92 0 012.468-4.614c.89-1.456 1.47-2.194 1.77-2.194.164 0 .491.334.966 1.012.118.17.24.352.368.548.197-.073.5-.138.911-.2a25.299 25.299 0 015.187-.053c.424.067.733.14.93.225.12-.185.237-.358.35-.52.474-.678.801-1.012.965-1.012zM10.677 0c.315 0 .958.87 1.965 2.6.066.126.072.149.072.187 0 .04-.002.097-.125.097h-1.38c-.19.048-.271.172-.271.308 0 .135.082.33.366.33h1.087c.309 0 .582-.024.683.044.088.071.16.144.277.372a56.523 56.523 0 011.575 3.073c.457 1.033.69 1.654.69 1.866 0 .129-.18.238-.53.339-.376.101-.839.161-1.435.226a21.56 21.56 0 01-1.912.113c-.746.017-1.385.065-2.071.057a36.084 36.084 0 01-1.912-.113 8.97 8.97 0 01-1.434-.227c-.351-.113-.531-.238-.531-.395 0-.337.372-.973 1.115-2.517a.892.892 0 01.15-.208c.035-.022.226-.018.328-.018h1.381c.521 0 .544-.311.545-.338 0-.002 0-.29-.545-.312H7.437a.338.338 0 01-.139-.036c-.031-.022-.022-.09.013-.186.035-.096.082-.172.126-.287.7-1.331 1.356-2.489 1.965-3.505C10.055.497 10.482 0 10.677 0z"></path>
                </SmartmageLogoSvg>
            </div>
            <SmartmageSpan>SMARTMAGE</SmartmageSpan>
        </FooterLogo>
    </StyledFooter>
  );
}

export default Footer;
