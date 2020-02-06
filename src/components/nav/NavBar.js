import React from "react";
import AuthUserContext from "../session/context";
import {withFirebase} from '../firebase';
import {Link} from 'react-router-dom';

const NavBarWithAuthBase = (props) => {
	return (
		<div className="navbar-container">
			<ul>
				<li className="navbar-link">
					<Link 
						to={"/saved"}
					>
						Saved
					</Link>
				</li>
				<li className="navbar-link">
					<Link 
						to={"/settings"}
					>
						Settings
					</Link>
				</li>
				<li className="navbar-link">
					<a onClick={() => props.firebase.sign_out()}>Logout</a>
				</li>
			</ul>
		</div>
	);
};

const NavBarWithAuth = withFirebase(NavBarWithAuthBase);

const NavbarNoAuth = () => <div className="navbar-container">navbar WITHOUT AUTH</div>;

const Navbar = () => (
	<AuthUserContext.Consumer>
		{authUser => (authUser ? <NavBarWithAuth /> : <NavbarNoAuth />)}
	</AuthUserContext.Consumer>
);

export default Navbar;