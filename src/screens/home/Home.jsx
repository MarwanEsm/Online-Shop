import Navbar from "../../layout/navbar/Navbar"
import PageHeader from "../../layout/pageHeader/PageHeader"
import Section from "../../layout/section/Section"
import styles from "./Home.module.scss"
import CountrySelector from "../../layout/elements/countrySelector/CountrySelector"

const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" }
]
const Home = () => {




    return <div className={styles.container}>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <Section />
        <h2>Daily Corona Numbers</h2>
        <div>
            <CountrySelector />
        </div>

    </div>
}

export default Home