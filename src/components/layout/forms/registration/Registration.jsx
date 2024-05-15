import { Button } from "reactstrap"
import styles from "./Registration.module.scss"


const Registration = () => {

    return <form className={styles.container}>
        <input type="text" name="first_name" placeholder="First Name" />
        <input type="text" name="last-name" placeholder="Last Name" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirm_password" placeholder="Confirm Password" />
        <Button color="secondary" size="big" outline>Register</Button>

    </form>
}


export default Registration