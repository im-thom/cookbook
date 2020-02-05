import React from 'react';
import MenuButton from './MenuButton';

const SearchBar = (props) =>  {
	
	return (
		<>
			<form className="search-form">
				<input className="card search-bar" type="text" placeholder={props.placeholder} value={props.term} onChange={e => props.handleChange(e.target.value )}/>
				<MenuButton 
					accountImage = {props.accountImage}
					toggleMenu = {props.toggleMenu}
				/>
			</form>
		</>
	);
}

export default SearchBar;