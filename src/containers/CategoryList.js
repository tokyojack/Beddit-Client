import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from "../store/actions/categories"
import CategoryItem from '../components/CategoryItem';
import LoadingIcon from '../components/LoadingIcon';

export class MessageList extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        if (this.props.categories.isLoading)
            return <LoadingIcon />

        return (
            <div>
                <br />
                {this.props.categories.values.map(category => <CategoryItem key={category.name} {...category} />)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        currentUser: state.currentUser.user.id
    }
}

export default connect(mapStateToProps, { fetchCategories })(MessageList)
