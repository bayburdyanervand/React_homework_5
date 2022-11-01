import React from "react";
import './Footer.css'
import style from "../header/style";

const Footer = () => {

    return (
        <footer className="footer" >
            <div className="container">
                <div className="col footer__info">
                    <h3 className="footer__info__title">Piroll Design, Inc.</h3>
                    <p className="footer__info__copy">
                        &copy; 2017 Piroll. All rights reserved. <br/>
                        Designed by robirurk
                    </p>
                </div>
                <div className="col footer__contact">
                    <a href="mailto:hello@pirolltheme.com" className="footer__contact__link">hello@pirolltheme.com</a>
                    <a href="tel:+44 987 065 908" className="footer__contact__link">+44 987 065 908</a>
                    <br/>
                        <br/>
                </div>
                <div className="col footer__nav1">
                    <ul className="footer__block">
                        <li className="footer__list"><a href="#" className="footer__link">Projects</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">About</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Services</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Carreer</a></li>
                    </ul>
                </div>
                <div className="col footer__nav2">
                    <ul className="footer__block">
                        <li className="footer__list"><a href="#" className="footer__link">News</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Events</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Contact</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Legals</a></li>
                    </ul>
                </div>
                <div className="col footer__soc">
                    <ul className="footer__block">
                        <li className="footer__list"><a href="#" className="footer__link">Facebook</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Twitter</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Instagram</a></li>
                        <li className="footer__list"><a href="#" className="footer__link">Dribbble</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer