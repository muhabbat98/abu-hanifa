import React from 'react'
import './Footer.css' 
import { FaTelegram,FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';


export default () => {
   
	return ( <>
            
        <footer>
            <div className="container flexing">
                <div className="logo">
                    <h2>Abu Hanifa</h2>
                    <span>
                     Copyright. 2020
                    </span>
                </div>
                <div className="list">
                    <ul>
                        <li>Courses</li>
                        <li>Mentors</li>
                        <li>About us</li>
                        <li>Prices</li>
                        <li>Feedback</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="icon">
                    <ul>
                        <li><FaInstagram/></li>
                        <li><FaFacebook/></li>
                        <li><FaTelegram/></li>
                        <li><FaYoutube/></li>
                    </ul>
                </div>
            </div>
        </footer>

    </>);
}


