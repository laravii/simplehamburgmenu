import styled from 'styled-components';

import { Menu } from '@styled-icons/boxicons-regular/Menu';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MenuC = styled.div`
	display: flex;
	justify-content: flex-end;
	background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
	color: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
	transition-delay: background-color 2s;

	border-radius: 8px;
`;

export const MenuIcon = styled(Menu)`
	width: 3rem;
	height: 3rem;
`;

export const NavigationContainer = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 1.7rem;
`;

export const NavigationOptions = styled.a`
	text-decoration: none;
`;
