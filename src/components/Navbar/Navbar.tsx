import { NavLink } from 'react-router-dom'

import { pageUrls } from './utils'

import './styles.css'

export const Navbar = () => {
	return (
		<nav>
			<ul>
				{pageUrls.map((el) => (
					<NavLink key={el} to={el.toLocaleLowerCase()}>
						{el}
					</NavLink>
				))}
			</ul>
		</nav>
	)
}
