import React, { Component } from 'react';
import './data.css';

import mock from '../data/mock.json';

class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
        console.log(mock);
    }

    componentDidMount() {
        fetch('/api/data')
            .then(res => res.json())
            .then(data => this.setState({ data }))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(user =>
                        <div key={user.id}>
                            <h1>{user.firstName} {user.lastName}</h1>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default Data;
