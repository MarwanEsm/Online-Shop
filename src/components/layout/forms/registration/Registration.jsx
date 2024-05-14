import { Row, Col } from "reactstrap"


const Registration = () => {

    return <>
        <Row>
            <Col>
                <input type="text" name="first_name" placeholder="First Name" />
            </Col>
            <Col>
                <input type="text" name="last-name" placeholder="Last Name" />
            </Col>
        </Row>

        <Row>
            <Col>
                <input type="password" name="password" placeholder="Password" />
            </Col>
            <Col>
                <input type="password" name="confirm_password" placeholder="Confirm Password" />
            </Col>
        </Row>
    </>
}


export default Registration