import React from 'react';
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Navbar from "../../components/layout/navbar/Navbar";
import styles from "./About.module.scss";
import masksShop from "../../assets/Photos/MasksShop.png";
import maskGlasses from "../../assets/Photos/MaskGlasses.jpg";
import maskSport from "../../assets/Photos/MaskSport.jpg"
import maskElderly from "../../assets/Photos/MaskElderly.jpg"
import PhotosFactory from "../../components/elements/photosFactory/PhotosFactory";

const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Design a Mask", href: "/design" },
    { label: "Shop", href: "/shop" }
];

const About = () => {
    return (
        <div className={styles.container}>
            <PageHeader />
            <Navbar items={NAVBAR_ITEMS} />

            <img src={masksShop} alt="masks_shop" />

            <div className={styles.photosContainer}>
                <PhotosFactory
                    src={maskGlasses}
                    content={`Wearing masks often leads to fogging on eyeglasses due to exhaled warm air.
                    This fogging can impair vision and cause discomfort, requiring frequent adjustments and cleaning.
                    Despite these challenges, the benefits of mask-wearing in preventing COVID-19 transmission remain crucial.`}
                />

                <PhotosFactory
                    src={maskSport}
                    content={`Wearing masks during sports activities can pose challenges for athletes. Restricted airflow and 
                    increased heat buildup may lead to discomfort, reduced performance, and difficulty in breathing during 
                    intense physical exertion. Despite these challenges, adapting to mask usage is crucial to maintain safety 
                    and prevent the spread of COVID-19 within sports communities`}
                />
                <PhotosFactory
                    src={maskElderly}
                    content={`For elderly individuals, wearing masks can present challenges such as discomfort, difficulty in breathing, 
                    and increased anxiety due to restricted airflow and reduced social interaction cues. Despite these difficulties, 
                    adherence to mask-wearing guidelines remains vital for their protection against COVID-19 and maintaining overall 
                    health and safety.`}
                />
            </div>
        </div>
    );
};

export default About;
