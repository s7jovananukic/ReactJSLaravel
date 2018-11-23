import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render(){
        return (

                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="">AppLogo</a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                </ul>
                            </div>
                        </nav>
                        {/*<div>*/}
                            {/*{this.props.children}*/}

                        {/*</div>*/}
                    </div>


        )
    }
}
export default Header;