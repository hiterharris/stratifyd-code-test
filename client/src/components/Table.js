import React, { Component } from 'react';
import './Table.css';

export default class Test extends Component {
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
            <div className="container">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Content</th>
                        <th>Time</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.data.map(data => <div className="data-cell">{data.id}</div>)}</td>
                        <td>{this.state.data.map(data => <div className="data-content"> {data.Content}</div>)}</td>
                        <td>{this.state.data.map(data => <div className="data-cell">{data.Time}</div>)}</td>
                        <td>{this.state.data.map(data => <div className="data-cell">{data.Category}</div>)}</td>
                    </tr>
                </tbody>
            </div>
        );
    }
}