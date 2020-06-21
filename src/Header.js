import React from 'react';
import cupcake from './cupcake.png';
import './Header.css'

const Header = () =>{
	return(
		<div>
			<nav className="navbar navbar-light bg-light-red">
			    <h1 className="logoname text-white align-middle ml-3 mt-2 mb-1 text-left display-4">Munch</h1>
			    <img className="d-inline-block align-top mb-3 mt-2 mr-4" src={cupcake} alt="Munch" />
			</nav>
		</div>
	)
}

export default Header;