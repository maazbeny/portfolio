import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import useScrollAnimation from '../useScrollAnimation';

import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    const [workRef, workClass] = useScrollAnimation('animate-bottom-to-top');

    return (
        <div ref={workRef} className={`footer ${workClass}`}>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1 className='heading'>MAAZ</h1>
                    <img className='my-work2' src={theme_pattern} alt="" />
                    <p>I am a frontend developer from, Pakistan with 2 years of experience </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your  email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    © 2023 Maaz Zarif. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
