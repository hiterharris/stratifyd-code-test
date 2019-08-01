import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
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
        // const tableData = this.state.data.map(data => <li>{data}</li>);
        // const id = this.state.data.map(data => <li className="table-content">{data.id}</li>);
        // const content = this.state.data.map(data => <li className="table-content">{data.Content}</li>);
        // const time = this.state.data.map(data => <li className="table-content">{data.Time}</li>);
        // const categoryList = this.state.data.map(data => <div className="table-data">{data.Category}</div>);
        // const category = categoryList.map(category => <li className="table-content">{category}</li>)
        // if (category.length === 0) {
        //     return null;
        // } 
        return (
            <div>
                <ul className="table">
                    <ul className="table-column">
                        <li className="table-header">Id</li>
                        <li>{this.state.data.map(data => <div className="table-data">{data.id}</div>)}</li>
                    </ul>
                    <ul className="table-column">
                        <li className="table-header">Content</li>
                        <li>{this.state.data.map(data => <div className="table-data-content">{data.Content}</div>)}</li>
                    </ul>
                    <ul className="table-column">
                        <li className="table-header">Time</li>
                        <li>{this.state.data.map(data => <div className="table-data">{data.Time}</div>)}</li>
                    </ul>
                    <ul className="table-column">
                        <li className="table-header">Category</li>
                        <li>{this.state.data.map(data => <div className="table-data">{data.Category}</div>)}</li>
                        {/* <li>{category}</li> */}
                        {/* {category} */}
                    </ul>
                </ul>
            </div>
        );
    }
}