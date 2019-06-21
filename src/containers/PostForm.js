import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { postNewPost } from '../store/actions/posts';

export class PostForm extends Component {

    state = {
        title: "",
        content: ""
    }

    onFormSubmit = event => {
        event.preventDefault();
        const categoryName = this.props.match.params.category_name;
        let {title, content} = this.state;
        this.props.postNewPost(title, content, categoryName);
        this.setState({title: "", content: ""})
        this
            .props
            .history
            .push(`/category/${categoryName}`)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Form onSubmit={this.onFormSubmit}>
                            <h2
                                style={{
                                paddingTop: "30px",
                                paddingBottom: "25px"
                            }}>Create post for: {this.props.match.params.category_name}</h2>

                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Enter title"/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    value={this.state.content}
                                    onChange={this.handleChange}
                                    id="content"
                                    name="content"
                                    placeholder="Enter content"
                                    as="textarea"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                    Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        errors: state.errors
    }
}
export default connect(mapStateToProps, {postNewPost})(PostForm)
