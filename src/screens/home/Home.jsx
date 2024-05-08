import Navbar from "../../components/layout/navbar/Navbar"
import PageHeader from "../../components/layout/pageHeader/PageHeader"
import Section from "../../components/layout/section/Section"
import styles from "./Home.module.scss"
import CountrySelector from "../../components/elements/countrySelector/CountrySelector"
import Table from "../../components/layout/table/Table"
import { useSelector } from "react-redux"

const NAVBAR_ITEMS = [
    { label: "About", href: "/about" },
    { label: "Design a Mask", href: "/design" },
    { label: "Shop", href: "/shop" }
]
const Home = () => {

    return <div className={styles.container}>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <Section />
        <h2>Daily Corona Numbers</h2>
        <CountrySelector />
        <Table />

    </div>
}

export default Home