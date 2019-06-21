import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from "../store/actions/post"
import LoadingIcon from '../components/LoadingIcon';
import Jumbotron from 'react-bootstrap/Jumbotron';
export class Post extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        if (this.props.post.isLoading)
            return <LoadingIcon />

        const { title, content,  category } = this.props.post.value;

        return (
            <div>
                <h1 style={{ paddingBottom: "30px", paddingTop: "20px" }}>{category.name}: </h1>
                <Jumbotron>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post
    }
}

export default connect(mapStateToProps, { fetchPost })(Post)
