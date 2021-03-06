import React, { useState } from 'react';
//css
import './your-data.scss';
//Images
import FirstIconWhite from '../assets/icons/icono_11_dif.png';
import SecondIconWhite from '../assets/icons/icono_12_dif.png'
import ThirdIconWhite from '../assets/icons/icono_13_dif.png'
import FirstIconOrange from '../assets/icons/icono_11.png'
import SecondIconOrange from '../assets/icons/icono_12.png'
import ThirdIconOrange from '../assets/icons/icono_13.png'
import Image from '../assets/images/image5.jpg'

const YourData = () => {
    const [isLeftHover, setIsLeftHover] = useState(false);
    const [isTopHover, setIsTopHover] = useState(false);
    const [isBottomHover, setIsBottomHover] = useState(false);

    return (
        <div className={'your-data-section'}>
            <h1 className={'your-data-title'}>EXPLORE YOUR DATA</h1>
            <div className={'your-data-container'}>
                <div className={'items-wrapper'}>
                    <div
                        className={`${isTopHover ? 'your-data-items hover-element' : 'your-data-items'}`}
                        onMouseEnter={() => setIsTopHover(true)}
                        onMouseLeave={() => setIsTopHover(false)}
                    >
                        <img alt={'top-icon'} src={FirstIconOrange} />
                        <p className={'your-data-text'}>Say goodbye to clunky spreadsheets,
                            static views and manually compiled reports prone to human error</p>
                    </div>
                    <div
                        className={`${isLeftHover ? 'your-data-items hover-element' : 'your-data-items'}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <img alt={'left-icon'} src={SecondIconOrange} />
                        <p className={'your-data-text'}>Discover powerful insights within your existing data to
                            identify areas of improvement, streamline operations and make evidence-based decisions. </p>
                    </div>
                    <div
                        className={`${isBottomHover ? 'your-data-items hover-element' : 'your-data-items'}`}
                        onMouseEnter={() => setIsBottomHover(true)}
                        onMouseLeave={() => setIsBottomHover(false)}
                    >
                        <img alt={'bottom-icon'} src={ThirdIconOrange} />
                        <p className={'your-data-text'}>Get a BI solution tailored to your business needs to
                            transform your data into actionable intelligence in the most efficient
                            and sustainable way.</p>
                    </div>
                </div>
                <div className={'your-data-rhombus-container'}>
                    <div
                        className={`${isLeftHover ? 'rhombus left rhombus-hover' : 'rhombus left'}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <img src={SecondIconWhite} alt={'left-icon'} className={'your-data-icon'}/>
                    </div>
                    <div
                        className={`${isTopHover ? 'rhombus top rhombus-hover' : 'rhombus top'}`}
                        onMouseEnter={() => setIsTopHover(true)}
                        onMouseLeave={() => setIsTopHover(false)}
                    >
                        <img src={FirstIconWhite} alt={'top-icon'} className={'your-data-icon'}/>
                    </div>
                    <div className={'rhombus right'}>
                        <img src={Image} alt={'right'} className={'your-data-img'} />
                    </div>
                    <div
                        className={`${isBottomHover ? 'rhombus bottom rhombus-hover' : 'rhombus bottom'}`}
                        onMouseEnter={() => setIsBottomHover(true)}
                        onMouseLeave={() => setIsBottomHover(false)}
                    >
                        <img src={ThirdIconWhite} alt={'fourth-icon'} className={'your-data-icon'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default YourData;