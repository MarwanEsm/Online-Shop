import { useState } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import styles from "./Login.module.scss";
import bcrypt from 'bcryptjs';

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });
    const [displayLoginError, setDisplayLoginError] = useState(false);

    const isRegistered = useSelector(state => state.form.isRegistered);
    const registeredDetails = useSelector(state => state.form.registrationDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const onLogin = (e) => {
        e.preventDefault();
        if (!isRegistered) {
            setDisplayLoginError(true);
        } else if (
            isRegistered &&
            loginDetails.email === registeredDetails.email &&
            bcrypt.compareSync(loginDetails.password, registeredDetails.password) // Compare the password
        ) {
            // Login successful
            setDisplayLoginError(false);
            console.log("Login successful");
        } else {
            // Login failed
            setDisplayLoginError(true);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onLogin}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={loginDetails.email}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={loginDetails.password}
                />
                <Button type="submit" color="secondary" size="big" outline>Login</Button>
            </form>
            {displayLoginError && <p className={styles.error}>Login failed. Please check your email and password.</p>}
        </div>
    );
};

export default Login;
