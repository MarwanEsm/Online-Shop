import { Button } from "reactstrap"
import styles from "./Registration.module.scss"


const Registration = () => {

    return <div className={styles.container}>
        <form className={styles.form}>
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last-name" placeholder="Last Name" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirm_password" placeholder="Confirm Password" />
        </form>
        <Button color="secondary" size="big" outline>Register</Button>
    </div>
}


export default Registration