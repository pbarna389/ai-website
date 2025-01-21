import { Link } from 'react-router-dom'

import { pageUrls } from './utils'

export const Navbar = () => {
	return (
		<ul>
			{pageUrls.map((el) => (
				<Link to={el}>{el}</Link>
			))}
		</ul>
	)
}
