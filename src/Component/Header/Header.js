import {Link} from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";

import '../../Asset/Header.css'
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='header'>
            <div className='menu'>
                <div className='col-logo'>
                    <img className='logo' alt='' src='https://logo-maker-api.s3.us-west-2.amazonaws.com/projects/629c2285aa2c97ddaf3bb8b8/thumbnail.png?AWSAccessKeyId=AKIA6LFXYJ6BXG4EKM6A&Expires=1655777940&Signature=SZFfg82FDxbMQq%2FlrhtRflFiM%2Bk%3D'/>
                    <h1>MCT</h1>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to ={"/Home"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"/About"} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"/Post"} className="nav-link">Post Jd</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"/Contact"} className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"/Notification"} className="nav-link"> <IoNotifications/></Link>
                    </li>
                </ul>
                <p className='btn-header'><Link  to ={"Sign out"} className="nav-link">Sign out</Link></p>
            </div>
        </div>
    )
}

export default Header;