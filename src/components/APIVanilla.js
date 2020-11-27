import React, { Component } from 'react';
import UserCard from './UserCard';

class APIVanilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
                {/* {this.state.items.map(user => <div>{user.name}</div>)} */}
                {this.state.items.map(user => <UserCard
                    key={user.id}
                    userData={user}
                />)}
            </div>
        );
    }
}

export default APIVanilla;