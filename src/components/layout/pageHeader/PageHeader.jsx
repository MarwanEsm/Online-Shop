import React from 'react';
import icon from "../../../assets/Photos/pageicon.png";
import styles from "./PageHeader.module.scss";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setForm } from '../../../redux/FormSlice';
import { Link } from 'react-router-dom';

const PageHeader = () => {

    const location = useLocation();
    const dispatch = useDispatch()

    const isRegistrationPage = location.pathname.includes("register");
    const isLoginPage = location.pathname.includes("login");


    return (
        <div className={styles.container}>
            <div className={styles["icon-container"]}>
                <img src={icon} alt="Mask" />
            </div>

            <div className={styles.actions}>
                {(isRegistrationPage || !isLoginPage) &&
                    <Link to={"/login"} onClick={() => dispatch(setForm("login"))}>Login</Link>
                }
                {(!isRegistrationPage && !isLoginPage) && <span>|</span>}

                {(isLoginPage || !isRegistrationPage) &&
                    <Link to={"/register"} onClick={() => dispatch(setForm("register"))}>Register</Link>
                }
            </div>
        </div>
    );
};

export default PageHeader;
