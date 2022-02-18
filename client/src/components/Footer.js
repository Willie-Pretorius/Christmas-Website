import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className='darkbg'>
      <p className='goldText foot'>
        This website was built by Willie Pretorius. Copyright ©
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
export default Footer;
