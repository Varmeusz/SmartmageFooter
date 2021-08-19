import React from "react";
import styled from "styled-components";

function getSocialUrl(name) {
    let SocialArr = {};
    SocialArr.Instagram = "https://www.instagram.com/wokularach.pl/";
    SocialArr.Facebook = "https://www.facebook.com/SklepWokularach/";
    SocialArr.Youtube =
        "https://www.youtube.com/channel/UC8bZpRlppkN4rKUPYvUFxGg";
    return SocialArr[name];
}

function getSocialLogoPath(name) {
    let SocialArr = {};
    SocialArr.Instagram =
        "M17.34 5.46a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm4.6 2.42a7.588 7.588 0 00-.46-2.43 4.94 4.94 0 00-1.16-1.77 4.7 4.7 0 00-1.77-1.15 7.3 7.3 0 00-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 00-2.43.47 4.78 4.78 0 00-1.77 1.15 4.7 4.7 0 00-1.15 1.77 7.3 7.3 0 00-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 00.47 2.43 4.7 4.7 0 001.15 1.77 4.78 4.78 0 001.77 1.15 7.3 7.3 0 002.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 002.43-.47 4.7 4.7 0 001.77-1.15 4.85 4.85 0 001.16-1.77c.285-.78.44-1.6.46-2.43 0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12zM20.14 16a5.61 5.61 0 01-.34 1.86 3.06 3.06 0 01-.75 1.15c-.324.33-.717.586-1.15.75a5.61 5.61 0 01-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 01-1.94-.3 3.27 3.27 0 01-1.1-.75 3 3 0 01-.74-1.15 5.54 5.54 0 01-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 01.35-1.9A3 3 0 015 5a3.14 3.14 0 011.1-.8A5.73 5.73 0 018 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 011.86.34 3.06 3.06 0 011.19.8c.328.307.584.683.75 1.1.222.609.337 1.252.34 1.9.05 1 .06 1.37.06 4s-.01 3-.06 4zM12 6.87A5.13 5.13 0 1017.14 12 5.12 5.12 0 0012 6.87zm0 8.46a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66z";
    SocialArr.Facebook =
        "M20.9 2H3.1A1.1 1.1 0 002 3.1v17.8A1.1 1.1 0 003.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 013.88-4 20.26 20.26 0 012.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.102 1.102 0 001.1-1.1V3.1A1.101 1.101 0 0020.9 2z";
    SocialArr.Youtube =
        "M23 9.71a8.499 8.499 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.362 78.362 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2c.12.505.365.972.71 1.36a2.86 2.86 0 001.49.78c2.156.266 4.328.376 6.5.33 3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78c.28-.28.49-.623.61-1 .358-1.097.533-2.246.52-3.4.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z";

    return SocialArr[name];
}

const LogoContainer = styled.div`
    position: relative;
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
        fill: #fff;
    }
    margin-right: 26px;
`;
const LogoAnchor = styled.a`
    color: #fff;
    text-decoration: none;
`;

const Logo = styled.svg`
    width: 24px;
    height: 24px;
    fill: #fff;
    
`;

function SocialButton(props) {
    return (
        <LogoContainer>
            <LogoAnchor href={getSocialUrl(props.social)}>
                <Logo>
                    <path d={getSocialLogoPath(props.social)}></path>
                </Logo>
            </LogoAnchor>
        </LogoContainer>
    );
}

export default SocialButton;
