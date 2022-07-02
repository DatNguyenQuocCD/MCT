import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Records from '../../DataJson/records.json';
import './Post.css';

export default class CardPost extends Component {
    render() {
        return (
            <div className='Post'> {
                Records.map(record => {
                    return(
                        <div className='CardPost'>
                            <div className='ImagesPost'>
                                <a><img className='img' src={record.img} /></a>
                            </div>
                            <div className='name_job'>
                                <Link className='name_job' to={`/Detail/${record.id}`}><h3>{record.name_job}</h3></Link>
                                <p className='paragrap'>{record.job_description}</p> 
                                <h5>{record.salary}</h5>
                                <h6>{record.conntact}</h6>
                            </div>
                        </div>
                    )
                })
            } 
            </div>
        )
    } 
}
