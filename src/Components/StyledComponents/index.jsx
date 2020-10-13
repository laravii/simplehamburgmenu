import React, { useState } from 'react';

import {
	Container,
	MenuC,
	NavigationContainer,
	NavigationOptions,
	MenuIcon,
} from './style';

export default function HambStyled() {
	const [ShowMenu, setShowMenu] = useState(false);

	return (
		<Container>
			<MenuC isOpen={ShowMenu}>
				<MenuIcon
					onClick={() => (ShowMenu ? setShowMenu(false) : setShowMenu(true))}
				/>
			</MenuC>
			<NavigationContainer isOpen={ShowMenu}>
				<NavigationOptions>Home</NavigationOptions>
				<NavigationOptions>Products</NavigationOptions>
				<NavigationOptions>Contact</NavigationOptions>
			</NavigationContainer>
		</Container>
	);
}
