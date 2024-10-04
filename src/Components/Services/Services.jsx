import React from 'react';
import './Services.css';
import useScrollAnimation from '../useScrollAnimation'; 
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [service1Ref, service1Class] = useScrollAnimation('animate-bottom-to-top'); // Add animation for each service
    const [service2Ref, service2Class] = useScrollAnimation('animate-bottom-to-top');
    const [service3Ref, service3Class] = useScrollAnimation('animate-bottom-to-top');

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                <div ref={service1Ref} className={`services-format ${service1Class}`}>
                    <h3>01</h3>
                    <h2>Front-End</h2>
                    <ol className='service-list'>
                        <p>1. User Interface Development</p>
                        <p>2. State Management</p>
                        <p>3. Responsive Design</p>
                        <p>4. API Integration</p>
                    </ol>
                </div>

                <div ref={service2Ref} className={`services-format ${service2Class}`}>
                    <h3>02</h3>
                    <h2>Back-End</h2>
                    <ol className='service-list'>
                        <p>1. Restful API Development</p>
                        <p>2. Database Management</p>
                        <p>3. User Authentication</p>
                        <p>4. Middleware Implementation</p>
                    </ol>
                </div>

                <div ref={service3Ref} className={`services-format ${service3Class}`}>
                    <h3>03</h3>
                    <h2>Other Services</h2>
                    <ol className='service-list'>
                        <p>1. Deployment and Hosting</p>
                        <p>2. Testing and Quality Assurance</p>
                        <p>3. Performance Optimization</p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Services;
