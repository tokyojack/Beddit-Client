import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner';

export class LoadingIcon extends Component {
    render() {
        return <Spinner 
            className="spinner"
        animation="border" />
    }
}

export default LoadingIcon
