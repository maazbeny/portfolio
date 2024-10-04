import React from 'react';
import './About.css';
import useScrollAnimation from '../useScrollAnimation';

import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profilepic3.png';

const About = () => {

    const [h1Ref, h1Class] = useScrollAnimation('animate-bottom-to-top');
    const [hrRef, hrClass] = useScrollAnimation('animate-bottom-to-top');
    const [imgRef, imgClass] = useScrollAnimation('animate-bottom-to-top');
    const [aboutRef, aboutClass] = useScrollAnimation('animate-bottom-to-top7');


    const [pRef1, pClass1] = useScrollAnimation('animate-bottom-to-top');
    const [pRef2, pClass2] = useScrollAnimation('animate-bottom-to-top');
    const [pRef3, pClass3] = useScrollAnimation('animate-bottom-to-top');

    const [skills2Ref, skills2Class] = useScrollAnimation('animate-bottom-to-top4');
    const [skills3Ref, skills3Class] = useScrollAnimation('animate-bottom-to-top5');
    const [skills4Ref, skills4Class] = useScrollAnimation('animate-bottom-to-top6');
    const [skills5Ref, skills5Class] = useScrollAnimation('animate-bottom-to-top7');
    const [skills6Ref, skills6Class] = useScrollAnimation('animate-bottom-to-top8');
    const [skills7Ref, skills7Class] = useScrollAnimation('animate-bottom-to-top9');
    const [skills8Ref, skills8Class] = useScrollAnimation('animate-bottom-to-top10');
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1 >About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img ref={imgRef} className={imgClass} src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p ref={pRef1} className={pClass1}>
                            As a passionate MERN stack developer, I specialize in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences and robust server-side functionality.
                        </p>
                        <p ref={pRef2} className={pClass2}>
                            vI thrive on transforming ideas into efficient applications, focusing on clean code, performance optimization, and user-centric design. Whether it's developing RESTful APIs, implementing real-time features, or crafting intuitive interfaces, my goal is to deliver solutions that not only meet but exceed client expectations.
                        </p>
                        <p ref={pRef3} className={pClass3}>
                            I continuously seek to learn and adapt to new technologies, ensuring that my skills remain at the forefront of the ever-evolving tech landscape. Let’s connect and explore how I can contribute to your next project!
                        </p>
                    </div>
                    <div className="about-skills">
                        <div ref={skills2Ref} className={`about-skill ${skills2Class}`}><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div ref={skills3Ref} className={`about-skill ${skills3Class}`}><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div ref={skills4Ref} className={`about-skill ${skills4Class}`}><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div ref={skills5Ref} className={`about-skill ${skills5Class}`}><p>MongoDB</p><hr style={{ width: "60%" }} /></div>
                        <div ref={skills6Ref} className={`about-skill ${skills6Class}`}><p>Express JS</p><hr style={{ width: "60%" }} /></div>
                        <div ref={skills7Ref} className={`about-skill ${skills7Class}`}><p>Node JS</p><hr style={{ width: "60%" }} /></div>
                        <div ref={skills8Ref} className={`about-skill ${skills8Class}`}><p>Next JS</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div ref={h1Ref} className={`about-achievement ${h1Class}`}>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr ref={hrRef} className={hrClass} />
                <div ref={h1Ref} className={`about-achievement ${h1Class}`}>
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr ref={hrRef} className={hrClass} />
                <div ref={h1Ref} className={`about-achievement ${h1Class}`}>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
}

export default About;
