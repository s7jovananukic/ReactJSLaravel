import React, { Component } from 'react';
import Header from "../components/Header";
import AboutContent from '../components/AboutContent';
import CreateItem from '../components/CreateItem';
import Footer from "../components/Footer";

class AboutPage extends Component {
    render() {
        return (
            <div className='About'>
                <Header/>
                <AboutContent/>
                <CreateItem/>
                <Footer/>
            </div>
        );
    }
}
export default AboutPage;