import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class AuthForm extends Component {

    state = {
        email: "",
        username: "",
        password: "",
        profileImageUrl: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const authType = this.props.signUp ? "signup" : "login";
        this.props.authUser(authType, this.state).then(() => {
            this.props.history.push("/")
        }).catch(() => {
            return;
        });
    }

    render() {
        const { email, username, password, profileImageUrl } = this.state;
        const { heading, signUp, errors, history, removeError } = this.props;

        history.listen(() => removeError());

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {errors.message && (<Alert style={{ marginTop: "20px" }} variant="danger" >{errors.message}</Alert>)}
                    <Row>
                        <Col></Col>
                        <Col xs={8}>
                            <Form onSubmit={this.handleSubmit}>

                                <h2 style={{ paddingTop: "30px", paddingBottom: "25px" }}>{heading}</h2>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        value={email}
                                        onChange={this.handleChange}
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control id="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        type="password"
                                        value={password}

                                        placeholder="Password" />
                                </Form.Group>
                                {signUp && (<div>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            value={username}
                                            onChange={this.handleChange}
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="Enter username" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Profile Image</Form.Label>
                                        <Form.Control
                                            value={profileImageUrl}
                                            onChange={this.handleChange}
                                            id="profileImageUrl"
                                            name="profileImageUrl"
                                            type="text"
                                            placeholder="Enter profile image url" />
                                    </Form.Group>
                                </div>)}

                                <Button variant="primary" type="submit">
                                    Submit
                            </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </form>
            </div>
        )
    }
}

export default AuthForm
