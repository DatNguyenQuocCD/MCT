import React, { Component } from 'react'
import './Post.css';
import CardPost from './CardPost.comp';

export default class Post extends Component {
    render() {
        return (
            <div>
                <CardPost/>
            </div>
        )
    }
}
