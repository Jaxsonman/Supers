import React, {Component} from 'react';


export default class SupersList extends Component {
    constructor(props) {
        super();
    }
    render() {
        return <h2>{this.props.heading}</h2>;
    }
} 