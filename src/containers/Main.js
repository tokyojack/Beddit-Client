import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Homepage from "../components/Homepage"
import { authUser } from "../store/actions/auth"
import { removeError } from "../store/actions/errors"

import Category from './Category';
import Post from './Post';
import AuthForm from '../components/AuthForm';
import { logout } from "../store/actions/auth";
import Container from 'react-bootstrap/Container';
import { Navbar } from "./Navbar";

const Main = props => {

    const { currentUser, logout } = props;

    return (
        <div>
            <Navbar currentUser={currentUser} logout={logout} />
            <Container>

                <Switch>
                    <Route exact path="/" render={props => <Homepage
                        currentUser={currentUser}
                        {...props} />} />

                    <Route exact path="/login" render={routeProps => {
                        return (
                            <AuthForm
                                buttonText="Login"
                                heading="Welcome back!"
                                {...props}
                                {...routeProps} />
                        )
                    }} />
                    <Route exact path="/signup" render={routeProps => {
                        return (
                            <AuthForm
                                signUp buttonText="sign up"
                                heading="Signup"
                                {...props}
                                {...routeProps} />
                        )
                    }} />

                    <Route exact path="/category/:name" component={Category} />
                    <Route exact path="/post/:id" render={routeProps => <Post {...routeProps} />} />
                </Switch>
            </Container>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {logout, authUser, removeError})(Main))