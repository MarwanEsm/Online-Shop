import PageHeader from "../../components/layout/pageHeader/PageHeader"
import Navbar from "../../components/layout/navbar/Navbar"
import styles from "./About.module.scss"
import masks from "../../assets/Photos/Masks3.png"

const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Design a Mask", href: "/design" },
    { label: "Shop", href: "/shop" }
]
const About = () => {

    return <div className={styles.container}>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <div class="shop">
            <img src={masks} alt="" />
        </div>
    </div>
}

export default About 