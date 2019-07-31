import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {
    render() {
        return (
            <div>
                <ul className="table">
                    <ul>
                        <li className="table-header">Id</li>
                        <li>content</li>
                        <li>content</li>
                    </ul>
                    <ul>
                        <li className="table-header">Content</li>
                        <li>content</li>
                        <li>content</li>
                    </ul>
                    <ul>
                        <li className="table-header">Time</li>
                        <li>content</li>
                        <li>content</li>
                    </ul>
                    <ul>
                        <li className="table-header">Category</li>
                        <li>content</li>
                        <li>content</li>
                    </ul>
                </ul>
            </div>
        );
    }
}