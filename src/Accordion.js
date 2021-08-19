import React, { useState } from 'react';
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

function Accordion(props){
    const plusSign = <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.995 4.495a.7.7 0 1 0-.99-.99L8.5 7.01 4.995 3.505a.7.7 0 0 0-.99.99L7.51 8l-3.505 3.505a.7.7 0 1 0 .99.99L8.5 8.99l3.505 3.505a.7.7 0 1 0 .99-.99L9.49 8l3.505-3.505z" fill="#fff"/>
</svg>;

    const name = props.name;
    const links = props.links;
    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title footer-info" aria-expanded={isActive} onClick={()=>setIsActive(!isActive)}>
                <div>{name}<span className="plus-sign">{plusSign}</span></div>
              </div>
              <div className="accordion-content" aria-expanded={!isActive}>
                {<ul className="footer-info-links">{links.map((el) => (<li key={hashCode(el).toString()}>{el}</li>))}</ul>}
              </div>
            </div>
          </div>
        </React.Fragment>
        
    );
}

export default Accordion;