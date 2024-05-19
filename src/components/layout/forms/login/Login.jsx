import { Button } from "reactstrap"
import styles from "./Login.module.scss"

const Login = () => {

    return <div className={styles.container}>
        <form className={styles.form}>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
        </form>
        <Button color="secondary" size="big" outline>Login</Button>
    </div>
}

export default Login