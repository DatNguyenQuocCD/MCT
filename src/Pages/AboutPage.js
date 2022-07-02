import React, { Component } from 'react';
import LeftAbout from '../Component/AboutDetail/LeftAbout.comp';
import RightAbout from '../Component/AboutDetail/RightAbout.comp';
import Contact from '../Component/Contact/Contact';
import '../Asset/About.css';
import { Link } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';

export default class About extends Component {
  render() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='TopAbout'>
                    <LeftAbout/>
                    <RightAbout/>
                </div>
            </div>
            <div>
                <Contact/>
            </div>
            <Footer />
        </>
    )
  }
}