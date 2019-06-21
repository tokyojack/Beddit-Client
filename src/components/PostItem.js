import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { Link } from "react-router-dom"
import Moment from 'react-moment';

export class PostItem extends Component {

    state = {
        userPointChoice:
            this.props.upvotedUsers.includes(this.props.currentUser)
                ? 1
                : this.props.downvotedUsers.includes(this.props.currentUser)
                    ? -1
                    : 0,
        currentPoints: this.props.points
    }

    changePostPoints = (id, user_id, amount) => {
        if (user_id === undefined){
            this.props.addError("You must be logged in")
            return;
        }

        this.props.fetchPostsChangePost(id, user_id, amount);
        let newCurrentPoints = 0;
        if(this.props.upvotedUsers.length === 0 && this.props.downvotedUsers.length === 0){
            newCurrentPoints = amount
        } else {
            newCurrentPoints = ((this.props.upvotedUsers.length + (amount >= 1 ? 1 : -1)) - (this.props.downvotedUsers.length + (amount <= -1 ? 1 : -1)))
        }

        this.setState({
            userPointChoice: amount,
            currentPoints: newCurrentPoints
        });
    }

    render() {
        const { title, _id, createdAt, user, currentUser } = this.props;
        return (
            <Card style={{ marginBottom: "20px" }}>
                <Card.Body >
                    <Row >
                        <Col xs={1} className="text-center" >
                            <div >

                                {this.state.userPointChoice >= 1 ?
                                    (<div>
                                        <p style={{ color: "green" }}><FaPlus /></p>
                                    </div>) :
                                    (<div>
                                        <p onClick={() => this.changePostPoints(_id, currentUser, 1)}><FaPlus /></p>
                                    </div>)
                                }

                                <p>{this.state.currentPoints}</p>

                                {this.state.userPointChoice <= -1 ?
                                    (<div>
                                        <span style={{ color: "red" }}><FaMinus /></span>
                                    </div>) :
                                    (<div>
                                        <span onClick={() => this.changePostPoints(_id, currentUser, -1)}><FaMinus /></span>
                                    </div>)
                                }

                            </div>
                        </Col>
                        <Col className="my-auto">
                            <Card.Title ><Link to={`/post/${_id}`}>{title}</Link> by <span style={{ fontSize: "20px" }}>{user.username}</span></Card.Title>
                            <Card.Title style={{ fontSize: "12px" }}>
                                <Moment format="Do MMM YYn">
                                    {createdAt}
                                </Moment>
                            </Card.Title>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default PostItem