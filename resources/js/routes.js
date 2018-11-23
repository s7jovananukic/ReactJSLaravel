import React, {Component} from 'react';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Route exact={true} path='/' render={() => (
                        <div className="layout">
                            <HomePage />
                        </div>
                    )}/>
                    <Route exact={true} path='/about' render={() => (
                        <div className="layout">
                            <AboutPage />
                        </div>
                    )}/>
                    <Route exact={true} path='/contact' render={() => (
                        <div className="layout">
                            <ContactPage />
                        </div>
                    )}/>

                </div>
            </Router>
        );
    }
}
export default Routes;