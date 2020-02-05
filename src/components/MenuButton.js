import React from 'react';
import AuthUserContext from './session/context';

const MenuButton = (props) =>  {
	return (
		<>
			<AuthUserContext.Consumer>
				{authUser => (authUser ?
					<MenuButtonWithoutAuth /> :
					<MenuButtonWithAuth 
						toggleMenu = {props.toggleMenu}
						accountImage = {props.accountImage}
					/>
				)}
			</AuthUserContext.Consumer>
		</>
	);
}

const MenuButtonWithAuth = (props) => {
	return (
		<div className="card account">
			<img className="img account-img" src={props.accountImage} onClick={() => props.toggleMenu()} />
		</div>
	);
}

const MenuButtonWithoutAuth = () => (
	<div>
		without auth
	</div>
)

export default MenuButton;