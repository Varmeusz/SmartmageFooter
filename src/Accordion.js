import React, { useState } from 'react';
import styled from 'styled-components';

function hashCode(string) {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const plusSignSvg = <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.995 4.495a.7.7 0 1 0-.99-.99L8.5 7.01 4.995 3.505a.7.7 0 0 0-.99.99L7.51 8l-3.505 3.505a.7.7 0 1 0 .99.99L8.5 8.99l3.505 3.505a.7.7 0 1 0 .99-.99L9.49 8l3.505-3.505z" fill="#fff"/>
</svg>;

    const AccordionContainer = styled.div``


    const PlusSign = styled.span`
      position: absolute;
      right: 6.9px;
      transform: rotate(-135deg) scaleX(90%) scaleY(90%);
      transition: 0.3s;
    `

    const AccordionTitleContainer = styled.div`
      font-family: "Rubik";
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
      padding: 16px 0;
      position: relative;
      cursor: pointer;
        &:after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 1px;
          background-color: rgb(79, 79, 79);
          transform: scaleX(1);
          will-change: transform;
          transition: transform 600ms cubic-bezier(0.5, 0, 0, 0.5) 0ms, background-color 0.2s linear 0s;
          transform-origin: left center;
      }
      
      &[aria-expanded="true"] {
        ${PlusSign}{
          transform: rotate(-90deg);
          transition: .3s;


        }
        &:after {
          content: "";
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 1px;
          background-color: rgb(79, 79, 79);
          transform: scaleX(0);
          will-change: transform;
          transition: transform 300ms cubic-bezier(0.5, 0, 0, 0.5) 0ms, background-color 0.2s linear 0s;
          transform-origin: left center;
      }
      }
    
    `
    const AccordionContentContainer = styled.div`
      overflow: hidden;
      max-height: 1000px;
      transition: max-height 1s ease-in-out;
      padding-top:0px;
      &[aria-expanded="true"] {
        max-height: 0px;
        transition: max-height 1s cubic-bezier(0, 1, 0, 1);
        
      &:after {
        content: "";
        visibility: hidden;
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 1px;
        background-color: rgb(79, 79, 79);
        will-change: transform;
        transition: visibility 200ms cubic-bezier(0.5, 0, 0, 0.5) 0ms, background-color 0.2s linear 0s;
        transform-origin: left center;
      }
    }
      
    position: relative;
    &:after {
      content: "";
      visibility: visible;
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 1px;
      background-color: rgb(79, 79, 79);
      will-change: transform;
      transition: .3s;
      transform-origin: left center;
    }
    `;

    const LinksList = styled.ul`
        font-family: Rubik;
        font-size: 12px;
        list-style: none;
        padding-left: 0px;
        margin-top: 0px;
        li {
            padding-bottom: 16px;
        }
      @media screen and (max-width: 768px) {
        font-family: Rubik;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        list-style: none;
        padding-left: 0px;
      }
      `
function Accordion(props){
    


    const name = props.name;
    const links = props.links;
    const [isActive, setIsActive] = useState(false);

    return (
      <AccordionContainer>
          <AccordionTitleContainer aria-expanded={isActive} onClick={()=>setIsActive(!isActive)}>
            <>{name}<PlusSign>{plusSignSvg}</PlusSign></>
          </AccordionTitleContainer>
          <AccordionContentContainer aria-expanded={!isActive}>
            <LinksList>{links.map((el) => (<li key={hashCode(el).toString()}>{el}</li>))}</LinksList>
          </AccordionContentContainer>
      </AccordionContainer>
        
    );
}

export default Accordion;