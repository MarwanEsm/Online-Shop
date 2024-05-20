import styles from "./Footer.module.scss"
import { Link } from "react-router-dom";


const FOOTER_ITEMS = [
    {
        title: "About",
        items: [{
            title: "Company",
            href: "/company"
        },
        {
            title: "Contact",
            href: "/contact"
        }]
    },
    {
        title: "Shop",
        items: [{
            title: "Face Masks",
            href: "/masks"
        },
        {
            title: "Sanitizers",
            href: "/somewhere"
        },
        {
            title: "Gloves",
            href: "/gloves"
        }
        ]
    },
    {
        title: "Resources",
        items: [{
            title: "FAQ",
            href: "/FAQ"
        },
        {
            title: "Shipping Info",
            href: "/info"
        },
        {
            title: "Returns",
            href: "/return"
        }
        ]
    }
];


const Footer = () =>
    <div className={styles.container}>
        {FOOTER_ITEMS.map((item, index) =>
            <div key={index}>
                <label key={index}>{item.title}</label>
                {item.items.map((item, index) => <Link to={item.href} key={index}>{item.title}</Link>)}
            </div>)}
    </div>



export default Footer