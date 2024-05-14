import styles from "./Footer.module.scss"


const FOOTER_ITEMS = [
    {
        title: "About",
        items: ["Company", "Contact"]
    },
    {
        title: "Shop",
        items: ["Face Masks", "Sanitizers", "Gloves"]
    },
    {
        title: "Resources",
        items: ["FAQ", "Shipping Info", "Returns"]
    }
];


const Footer = () =>
    <div className={styles.container}>
        {FOOTER_ITEMS.map((item, index) =>
            <div key={index}>
                <label key={index}>{item.title}</label>
                {item.items.map((item, index) => <a href="/" key={index}>{item}</a>)}
            </div>)}
    </div>



export default Footer