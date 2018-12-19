import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=>{
	return (
		<div>
			<NavLink to="/">Root</NavLink>
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/user/1">User 1</NavLink> 
		</div>
	);
}

export default Navigation ;