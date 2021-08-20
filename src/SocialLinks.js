import SocialButton from './socialButton';
import styled from 'styled-components';


function SocialLinks(){
    
    const SocialLinksContainer = styled.div`
        padding-bottom: calc(55px - 18px);
        grid-area: top;

        @media screen and (min-width: 768px) and (max-width: 1439px){
            ${'' /* margin-left: 137px; */}

        }
        @media screen and (min-width: 1440px) {

        }

    `
    const LogoContainer = styled.div`
        padding-bottom: 55px;
        display: flex;
        -webkit-box-pack: flex-start;
        justify-content: flex-start;
        -webkit-box-align: flex-start;
        align-items: center;
        position: relative;

    `
    const StyledHeader3 = styled.div`
        flex-grow: 0;
        margin: 0 0 19px;
        font-family: "Rubik";
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: left;

    `
    const ContactAnchor = styled.a`
        color: #fff;
        text-decoration: none;
    `
    const ContactParagraph = styled.p`
    
        font-family: Rubik;
        margin: 0 auto;
        font-size: 12px;
        margin-bottom: 2px;
        margin-left: 2px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    `
    const ContactParagraphBig = styled(ContactParagraph)`
        font-size: 17.3px;
        font-weight: 500;
        margin-bottom: 18px;

    `;

    return (
        <SocialLinksContainer>
            <StyledHeader3>Zostań z nami</StyledHeader3>
            <LogoContainer>
                <SocialButton social="Facebook"/>
                <SocialButton social="Instagram"/>
                <SocialButton social="Youtube"/>
            </LogoContainer>
            <StyledHeader3>Kontakt</StyledHeader3>
            <ContactAnchor href="#">
                <ContactParagraph>tel.</ContactParagraph>
                <ContactParagraphBig>22 113 44 48</ContactParagraphBig>
            </ContactAnchor>
            <ContactAnchor href="#">
                <ContactParagraph>email:</ContactParagraph>
                <ContactParagraphBig>kontakt@wokularach.pl</ContactParagraphBig>
            </ContactAnchor>
        </SocialLinksContainer>
    )
}

export default SocialLinks;