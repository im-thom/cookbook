import React from 'react';

class SearchBar extends React.Component {
	state = { 
		term: 'Search...',
		menuIsShowing: false
	};
	
	componentDidMount() {
		
	}
	
	onFormSubmit = (event) => {
		event.preventDefault();
		
		this.props.onSubmit(this.state.term);
	}
	
	toggleMenu() {
		this.setState({menuIsShowing: !this.state.menuIsShowing})
	}
	
	render() {
		return (
			<>
				<form onSubmit={this.onFormSubmit} className="search-form">
					<input className="card search-bar" type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>
					<div className="card account">
						<img className="img account-img" src={this.props.accountImage} onClick={() => this.toggleMenu()} />
					</div>
				</form>
				{this.state.menuIsShowing && (
					<div>
						not open
					</div>
				)}
			</>
		);
	}
}

export default SearchBar;