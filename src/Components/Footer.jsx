import React from 'react'

const Footer = () => {
  return (

    // footer page
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">
          <div className="footer__container__left__logo">
            <img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="logo" />
          </div>
          <div className="footer__container__left__text">
            <p>The Sparks Foundation</p>
          </div>
        </div>
        <div className="footer__container__right">
          <div className="footer__container__right__text">
            <p>© 2021 The Sparks Foundation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer