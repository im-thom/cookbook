import React from 'react';
// import NavBarContainer from '';

const SearchBar = (props) =>  {
	
	return (
		<>
			<form className="search-form">
				<input className="card search-bar" type="text" placeholder={props.placeholder} value={props.term} onChange={e => props.handleChange(e.target.value )}/>
				<div className="card account">
					<img className="img account-img" src={props.accountImage} onClick={() => props.toggleMenu()} />
				</div>
			</form>
		</>
	);
}

export default SearchBar;