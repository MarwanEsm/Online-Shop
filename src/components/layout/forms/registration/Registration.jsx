import { useState } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setRegistrationDetails } from "../../../../redux/FormSlice";
import styles from "./Registration.module.scss";
import bcrypt from 'bcryptjs';

const Registration = () => {
    const [details, setDetails] = useState({
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: ""
    });

    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (details.password !== details.confirm_password) {
            alert("Passwords do not match!");
            return;
        }

        const hashedPassword = bcrypt.hashSync(details.password, 10);

        const updatedDetails = {
            first_name: details.first_name,
            last_name: details.last_name,
            password: hashedPassword,
        };

        dispatch(setRegistrationDetails(updatedDetails))
    };



    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit} method="POST">
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    autoCapitalize="off"
                    onChange={handleChange}
                    value={details.first_name}
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={details.last_name}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={details.password}
                />
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={details.confirm_password}
                />
                <Button type="submit" color="secondary" size="lg" outline>
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Registration;
