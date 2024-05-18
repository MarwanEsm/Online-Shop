import React from 'react';
import icon from "../../../assets/Photos/pageicon.png";
import styles from "./PageHeader.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setForm } from '../../../redux/FormSlice';

const PageHeader = () => {
    const location = useLocation();

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isRegistrationPage = location.pathname.includes("register");
    const isLoginPage = location.pathname.includes("login");


    const handleLogin = () => {
        navigate("/login")
        dispatch(setForm("login"))
    }

    const handleRegister = () => {
        navigate("/register")
        dispatch(setForm("register"))
    }

    return (
        <div className={styles.container}>
            <div className={styles["icon-container"]}>
                <img src={icon} alt="Mask" />
            </div>

            <div className={styles.actions}>
                {(isRegistrationPage || !isLoginPage) && <label onClick={handleLogin}>Login</label>}
                {(!isRegistrationPage && !isLoginPage) && <span>|</span>}
                {(isLoginPage || !isRegistrationPage) && <label onClick={handleRegister}>Register</label>}
            </div>
        </div>
    );
};

export default PageHeader;
