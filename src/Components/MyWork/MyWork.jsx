import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import useScrollAnimation from '../useScrollAnimation';

import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
    const [workRef, workClass] = useScrollAnimation('animate-bottom-to-top');

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className={`mywork-container ${workClass}`} ref={workRef}>
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>

        </div>
    )
}

export default MyWork