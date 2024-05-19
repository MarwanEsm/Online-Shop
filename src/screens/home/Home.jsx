import Navbar from "../../components/layout/navbar/Navbar"
import PageHeader from "../../components/layout/pageHeader/PageHeader"
import Section from "../../components/layout/section/Section"
import styles from "./Home.module.scss"
import CountrySelector from "../../components/elements/countrySelector/CountrySelector"
import Table from "../../components/layout/table/Table"
import Footer from "../../components/layout/footer/Footer"


const NAVBAR_ITEMS = [
    { label: "About", href: "/about" },
    { label: "Design a Mask", href: "/design" },
    { label: "Shop", href: "/shop" }
]
const Home = () =>
    <div className={styles.container}>
        <PageHeader />

        <Navbar items={NAVBAR_ITEMS} />

        <Section />

        <h4>Daily Corona Numbers</h4>
        <CountrySelector />

        <Table />

        <Footer />
    </div>


export default Home