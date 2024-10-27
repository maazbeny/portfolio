import React, { useState } from 'react';
import './Hero.css';
import useScrollAnimation from '../useScrollAnimation';
import profile_img from '../../assets/profilepic3.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = () => {
        setShowResume(true);
    };

    const handleCloseResume = () => {
        setShowResume(false);
    };

    const [h1Ref, h1Class] = useScrollAnimation('animate-bottom-to-top');
    const [pRef, pClass] = useScrollAnimation('animate-left-to-right');
    const [connectRef, connectClass] = useScrollAnimation('animate-bottom-to-top2');
    const [resumeRef, resumeClass] = useScrollAnimation('animate-bottom-to-top2');

    return (
        <div id='home' className='hero'>
            <img className='profile-pic' src={profile_img} alt="Profile" />
            <h1 ref={h1Ref} className={h1Class}>
                <span>I'm Maaz Zarif,</span> MERN Stack developer based in Pakistan.
            </h1>
            <p ref={pRef} className={pClass}>
                I am a frontend React js developer from Islamabad, Pakistan with 2 years of experience in multiple projects.
            </p>
            <div className="hero-action">
                <div ref={connectRef} className={`hero-connect ${connectClass}`}>
                    <AnchorLink className="anchor-link" offset={50} href="#contact"> Connect with me </AnchorLink>
                </div>
                <div onClick={handleResumeClick} ref={resumeRef} className={`hero-resume ${resumeClass}`}>
                    My Resume
                </div>
            </div>

            {showResume && (
                <div className="resume-modal">
                    <span className="close-modal" onClick={handleCloseResume}>&times;</span>
                    <div className="modal-content">

                        <iframe
                            src="/resume.pdf"
                            title="Resume"
                            className="resume-iframe"
                        ></iframe>
                        <a href="/resume.pdf" download className="download-link">
                            Download My Resume
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
