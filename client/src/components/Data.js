import React, { Component } from 'react';

class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
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
                    {this.state.data.map(data => <div>{data.id}</div>)}
                </ul>
            </div>
        );
    }
}

export default Data;
