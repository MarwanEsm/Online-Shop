import styles from "./Section.module.scss"
import homePhoto from "../../../assets/Photos/Heading.png"

const Section = () => {

    return <div className={styles.container}>

        <div className={styles.paragraph}>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste facilis
                voluptates odit, nisi necessitatibus minima consequuntur temporibus
                vero dicta voluptates odit, nisi necessitatibus minima consequuntur
                temporibus vero dicta
            </p>
        </div>

        <div className={styles.advertisement}>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
                oluptatem suscipit provident debitis ipsu
            </p>

            <img src={homePhoto} alt="home-page" />

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
                animi, sed necessitatibus qui minima sit magnam adipisci
                repudiandae, magni, .
            </p>

        </div>
    </div>
}

export default Section