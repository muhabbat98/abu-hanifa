import React from 'react'
import './App.css';
import  Home  from './Components/Home/Home/Home'
import About from './Components/About/About'
import { Route, Switch } from 'react-router-dom';

function App() {
	return ( <>
		<Switch>
			<Route path='/about'>
				<About/>
			</Route>
			<Route path='/'>
				<Home/>
			</Route>
		</Switch>
		
	</>	);
}




export default App;
