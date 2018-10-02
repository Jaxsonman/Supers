import React, {Component} from 'react';

const rawSupersData = [
    {title: 'Post One', content: 'Post content', status: 'draft'},
    {title: 'Post Two', content: 'Post content', status: 'published'},
    {title: 'Post Three', content: 'Post content', status: 'published'},
    {title: 'Post Four', content: 'Post content', status: 'published'},

]

export default class SupersList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawSupersData,
            greeting: 'Hi there',
            isOpen: true
        };
    }
    render() {
        return <h2>{this.props.heading}</h2>;
    }
}