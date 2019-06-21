import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export class Navbar extends Component {

    logout = event => {
        event.preventDefault();
        this.props.logout();
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <Nav className="justify-content-end" activeKey="/home" style={{ backgroundColor: "#0543a8" }}>
                    <Nav.Item>
                        <Nav.Link >

                            {!this.props.currentUser.isAuthenticated ?
                                (<div>
                                    <Link to="/login"><Button variant="primary" style={{ marginRight: "20px" }}>Login</Button></Link>
                                    <Link to="/signup"><Button variant="primary">Signup</Button></Link>
                                </div>) :
                                (<div>
                                    <Button onClick={this.logout} variant="info">Logout</Button>
                                </div>)
                            }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Navbar