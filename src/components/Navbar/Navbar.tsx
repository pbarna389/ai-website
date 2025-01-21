import { NavLink } from 'react-router-dom'

import { pageUrls } from './utils'

export const Navbar = () => {
	return (
		<nav>
			Navbar
			<ul>
				{pageUrls.map((el) => (
					<NavLink key={el} to={el}>
						{el}
					</NavLink>
				))}
			</ul>
		</nav>
	)
}
