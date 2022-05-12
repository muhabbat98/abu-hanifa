import React from 'react'
import './About.css' 

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {FaArrowUp} from 'react-icons/fa'
import Carusel from '../Carusel/Carusel3/Carusel'


export default () => {


	return ( <>
        <Navbar></Navbar>

        <div className="about">
            <h2 className="container">about school</h2>
            <div className="blog container flexing">
                <div>
                    <p>
                         But I must explain Abu Hanifa to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of 2020 the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone.
                    </p>
                    <p>
                         But I must explain Abu Hanifa to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of 2020 the system, and expound the actual teachings of the great explorer
                    </p>
                </div>
                <div>
                    <p>
                         Our goal - is to educate believers about their religion in the simplest and most convenient way for them using modern web-technologies.
                    </p>
                    <p>
                        Our mission - is to create an innovative educational online platform and provide access to Islamic study programs adapted for different categories of students. All this is aimed at educating a new, highly moral and educated generation of Muslims.
                    </p>
                    <p>
                         How all this mistaken idea of and expound the actual teachings of the great explorer how all this mistaken idea of and expound the actual teachings of the great explorer
                    </p>
                </div>
            </div>
            <div className="drop">
                <button>
                    <FaArrowUp/>
                     Learn More
                </button>
            </div> 
        </div>
        <div className="news container">
            <h2>News</h2>
            <Carusel/>
        </div>
        <div className="frequent-asked">
            <h2>Frequently Asked Questions</h2>
            <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born
            </p>
        </div>




        <Footer></Footer>

	</>	);
}
