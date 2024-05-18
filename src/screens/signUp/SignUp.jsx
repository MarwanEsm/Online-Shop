import React, { useState } from 'react';
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Navbar from "../../components/layout/navbar/Navbar";
import Registration from "../../components/layout/forms/registration/Registration";
import Footer from "../../components/layout/footer/Footer";
import Login from '../../components/layout/forms/login/Login';
import styles from "./SignUp.module.scss";


const NAVBAR_ITEMS = [
    { label: "About", href: "/about" },
    { label: "Home", href: "/home" },
    { label: "Shop", href: "/shop" }
];

const SignUp = () => {
    const [displayLoginForm, setDisplayLoginForm] = useState(false)

    const switchForm = () => {
        if (!displayLoginForm)
            setDisplayLoginForm(true)
        setDisplayLoginForm(false)
    }

    return (
        <div className={styles.container}>
            <PageHeader onFormChange={switchForm} />
            <Navbar items={NAVBAR_ITEMS} />
            <div>
                {displayLoginForm ? <Login /> : <Registration />}
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
