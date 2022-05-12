import React from 'react'
import './Home.css' 
import AbuHanifa from '../../../assets/img/AbuHanifa.jpg'
import Footer from '../../Footer/Footer'
import Article from '../Article/Article'
import Summary from '../Summary/Summary'
import Navbar from '../../Navbar/Navbar'
import {FaArrowUp} from 'react-icons/fa'

export default () => {
   
	return ( <>
            <Navbar/>
            <main>
                <div className="container flexing">
                    <div className="info">
                        <h1>Intensive courses learning arabic </h1>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and </p>
                        <h4>First week - for free!</h4>
                        <button>Start studying</button>
                    </div>
                    <div className="abu-hanifa">
                        <img src={AbuHanifa} alt="Abu Hanifa arabian"/>
                    </div>  
                </div>
                <div className="drop">
                    <button>
                        <FaArrowUp/>
                        Learn More
                    </button>
                </div>   
            </main>  
            <Article/>
            <Summary/>
            <Footer/>
        </>
    );
}


