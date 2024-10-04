import React from 'react'
import './Contact.css'
import useScrollAnimation from '../useScrollAnimation';

import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const [pRef, pClass] = useScrollAnimation('animate-left-to-right1');
    const [skills2Ref, skills2Class] = useScrollAnimation('animate-bottom-to-top4');
    const [skills3Ref, skills3Class] = useScrollAnimation('animate-bottom-to-top5');
    const [skills4Ref, skills4Class] = useScrollAnimation('animate-bottom-to-top6');
    const [skills5Ref, skills5Class] = useScrollAnimation('animate-bottom-to-top7');

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ec4ebc2d-e845-4a68-bd3a-5f3b95a25645");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message)
            event.target.reset();
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div ref={pRef} className={`contact-left ${pClass}`}>
                    <h1>Lets talk</h1>
                    <p>As a  React developer, I am committed to staying at the forefront of web development trends and best practices. You contact anytime. </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>maazbangash2004@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />  <p>+923185490066</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <div ref={skills2Ref} className={`label-input ${skills2Class}`}>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' name="name" />
                    </div>
                    <div ref={skills3Ref} className={`label-input ${skills3Class}`}>

                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' />
                    </div>

                    <div ref={skills4Ref} className={`label-input ${skills4Class}`}>

                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="8" placeholder='Enter your message' id=""></textarea>
                    </div>

                    <button ref={skills5Ref} type='submit' className={`contact-submit ${skills5Class}`}>Submit now</button>

                </form>
            </div>
        </div>
    )
}

export default Contact
