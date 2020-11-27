import React, { Component } from 'react';
import UserCard from './UserCard';

class APIVanilla2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-27&sortBy=publishedAt&apiKey=c0f42c0fca144ac2b95c9391451520bc")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                        // items: result.articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ?
                    this.state.items.articles.map(article => <div>{article.author}</div>)
                    : <div>Loading ...</div>}
                {/* {this.state.items.map(user => <div>{user.name}</div>)} */}
                {/* {this.state.items.map(user => <UserCard
                    key={user.id}
                    userData={user}
                />)} */}
            </div>
        );
    }
}

export default APIVanilla2;