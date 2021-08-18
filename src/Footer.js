// import logo from './logo.svg';
import SocialButton from './socialButton';
import './Footer.scss';

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
        "Jak zamawiać": [],
        "Zwroty i reklamacja": [],
        "Warunki zakupów" : []
    };
    const footerInfoDivs = Object.keys(FooterInfo).map((el) =>  (
        <>
        <div className="footer-info">{el}</div>
        {FooterInfo[el].map(link => (
            <div className="footer-info-links">{link}</div>

        ))}
        </>
    ))

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
                <p>tel.</p>
                <p>22 113 44 48</p>
            </a>
            <a>
                <p>email:</p>
                <p>kontakt@wokularach.pl</p>
            </a>
        </div>
        <div className="footer-item">
            {footerInfoDivs}
            
        </div>

    </footer>
  );
}

export default Footer;
