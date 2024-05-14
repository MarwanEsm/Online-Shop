import icon from "../../../assets/Photos/pageicon.png";
import styles from "./PageHeader.module.scss";
import { useLocation } from "react-router-dom";

const PageHeader = () => {

    const location = useLocation()

    const isRegistrationPage = location.pathname.includes("register")
    const isLoginPage = location.pathname.includes("login")

    return <div className={styles.container}>
        <div className={styles["icon-container"]}>
            <img src={icon} alt="Mask" />
        </div>

        <div className={styles.actions}>
            {(isRegistrationPage || !isLoginPage) && <a href="/login">Login</a>}
            {(!isRegistrationPage && !isLoginPage) && <span>|</span>}
            {(isLoginPage || !isRegistrationPage) && <a href="/register">Register</a>}
        </div>
    </div>
}


export default PageHeader;
