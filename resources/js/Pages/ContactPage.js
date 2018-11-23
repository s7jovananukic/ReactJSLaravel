import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class ContactPage extends Component {
    render() {
        return (
            <div className='Contact'>
                <Header/>
                <div className="container">
                    <h1>Contact Us</h1>

                    <div className='ContactBlock'>
                        <p><span>Phone:</span>+321 456 987</p>
                        <p><span>Mail:</span>example.name@example.com</p>
                    </div>

                </div>
                <Footer/>
            </div>

        );
    }
}
export default ContactPage;