import React from "react";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'

const HeaderBox = styled.div`
.title-menu {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	margin: 0 auto;
}
`
const MenuBox = styled.div`
	display: flex;
	align-items: center;
	margin-left: 24px;
`;

function Header() {
  return (
		<HeaderBox>
			<MenuBox>
				<Link className="title-menu" to="/">HOME</Link>
				<Link className="title-menu" to="/info">INFO</Link>
			</MenuBox>
		</HeaderBox>
  );
}

export default Header;
