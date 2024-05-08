import React from 'react';
import styles from './Section.module.scss';
import homePhoto from '../../../assets/Photos/Heading.png';

const Section = () => {
    return (
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <h3>
                    Welcome to our online store! Stay safe and stylish with our premium collection of COVID masks
                </h3>
            </div>

            <div className={styles.advertisement}>
                <p>
                    Elevate your mask game with our exclusive designs and top-notch quality. From sleek and chic to fun and quirky, we have masks to suit every style and occasion.
                </p>

                <img src={homePhoto} alt="home-page" />

                <p>
                    Protect yourself and your loved ones without compromising on comfort or fashion. Shop now and make a statement while staying safe!
                </p>
            </div>
        </div>
    );
};

export default Section;
