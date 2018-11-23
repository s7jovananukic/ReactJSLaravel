import React, { Component } from 'react';
import Header from "../components/Header";
import HomeContent from '../components/HomeContent';
import Footer from "../components/Footer";

class HomePage extends Component {
    render() {
        return (
            <div className='Home'>
                <Header/>
                <HomeContent/>
                <Footer/>
            </div>
        );
    }
}
export default HomePage;