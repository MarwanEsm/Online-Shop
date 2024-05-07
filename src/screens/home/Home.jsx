import Navbar from "../../components/layout/navbar/Navbar"
import PageHeader from "../../components/layout/pageHeader/PageHeader"
import Section from "../../components/layout/section/Section"
import styles from "./Home.module.scss"
import CountrySelector from "../../components/elements/countrySelector/CountrySelector"
import Table from "../../components/layout/table/Table"
import { useSelector } from "react-redux"

const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" }
]
const Home = () => {

    const selectedCountry = useSelector(state => state.selectedCountry)

    return <div className={styles.container}>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <Section />
        <h2>Daily Corona Numbers</h2>
        <div>
            <CountrySelector />
        </div>
        <Table />

    </div>
}

export default Home