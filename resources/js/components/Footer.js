import React ,{Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <div className='container footer-wrap'>
                    <div className='footer-left'>
                        <div className="footer-logo">
                            <a className="navbar-brand" href="">AppLogo</a>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <ul className="nav footer-nav">
                            <li className="active"><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default Footer;