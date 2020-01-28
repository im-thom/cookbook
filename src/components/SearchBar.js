import React from 'react';

class SearchBar extends React.Component {
	state = { term: 'Search...' };
	
	onFormSubmit = (event) => {
		event.preventDefault();
		
		this.props.onSubmit(this.state.term);
	}
	
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="search-form">
				<input className="card search-bar" type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>
				<a className="card account" href="#">
					<img className="img account-img" src="../images/account.jpg" />
				</a>
			</form>
		);
	}
}

export default SearchBar;