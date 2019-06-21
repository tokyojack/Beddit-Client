import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

export class CategoryItem extends Component {

    render() {
        const { name } = this.props;

        return (
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body ><h1>{name}</h1>
                    <Link to={`/category/${name}`}><Button variant="outline-primary">Explore!</Button></Link>
                </Card.Body>
            </Card>
        )
    }
}

export default CategoryItem
