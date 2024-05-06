import Navbar from "../layout/navbar/Navbar"
import PageHeader from "../layout/pageHeader/PageHeader"
import Section from "../layout/section/Section"

const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" }
]
const Home = () => {
    return <div>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <Section />
    </div>
}

export default Home