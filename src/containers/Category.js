import React, { Component } from 'react'
import { fetchPosts, fetchPostsChangePost } from "../store/actions/posts"
import { addError } from "../store/actions/errors"
import { connect } from 'react-redux';
import PostItem from '../components/PostItem';
import LoadingIcon from '../components/LoadingIcon';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export class Category extends Component {

    componentDidMount() {
        this.props.fetchPosts(this.props.match.params.name);
    }

    render() {
        const { errors, match, posts } = this.props;
        if (posts.isLoading)
            return <LoadingIcon />

        const { name } = match.params;
        return (
            <div>
                {errors.message && (<Alert style={{ marginTop: "20px" }} variant="danger" >{errors.message}</Alert>)}
                <h1 style={{ paddingTop: "20px" }}>{name}: </h1>
                <Link to={`/create/${name}`}><Button variant="outline-primary" style={{ marginBottom: "30px" }}>Create</Button></Link>
                {posts.values.map(post => <PostItem key={post._id} {...post} {...this.props} />)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        currentUser: state.currentUser.user.id,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { fetchPosts, fetchPostsChangePost, addError })(Category)
