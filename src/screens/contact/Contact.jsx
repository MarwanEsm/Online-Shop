import ContactUs from "../../components/layout/forms/contactUs/ContactUs";
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
const NAVBAR_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Design a Mask", href: "/design" },
    { label: "Shop", href: "/shop" }
]
const Contact = () => {
    return <div>
        <PageHeader />
        <Navbar items={NAVBAR_ITEMS} />
        <ContactUs />
        <Footer />
    </div>


};

export default Contact;
