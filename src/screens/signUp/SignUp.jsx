import React from 'react';
import PageHeader from "../../components/layout/pageHeader/PageHeader";
import Navbar from "../../components/layout/navbar/Navbar";
import Registration from "../../components/layout/forms/registration/Registration";
import Footer from "../../components/layout/footer/Footer";
import Login from '../../components/layout/forms/login/Login';
import styles from "./SignUp.module.scss";
import { useSelector } from 'react-redux';

const NAVBAR_ITEMS = [
    { label: "About", href: "/about" },
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" }
];

const SignUp = () => {

    const form = useSelector(state => state.form.form)


    return (
        <div className={styles.container}>
            <PageHeader />
            <Navbar items={NAVBAR_ITEMS} />
            <div>
                {form === "register" && <Registration />}
                {form === "login" && <Login />}
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
