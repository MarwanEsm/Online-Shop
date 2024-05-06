import icon from "../../assets/Photos/pageicon.png";
import styles from "./PageHeader.module.scss";

const PageHeader = () => (
    <div className={styles.container}>
        <div className={styles["icon-container"]}>
            <img src={icon} alt="Mask" />
        </div>

        <div className={styles.actions}>
            <a href="/help">Help</a>
            <span>|</span>
            <a href="/register">Register</a>
        </div>
    </div>
);

export default PageHeader;
