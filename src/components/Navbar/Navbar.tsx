import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { pageUrls } from './utils'

import './styles.css'

export const Navbar = () => {
	const [isOnTop, setIsOnTop] = useState<boolean>()

	useEffect(() => {
		const checkCurrentHorPos = () => {
			return window.scrollY === 0 ? setIsOnTop(true) : setIsOnTop(false)
		}

		window.addEventListener('scroll', checkCurrentHorPos)

		return () => window.removeEventListener('scroll', checkCurrentHorPos)
	})

	return (
		<nav className="trans-opacity">
			<ul className={`${isOnTop && 'top'}`}>
				{pageUrls.map((el) => (
					<NavLink className={'font-teko trans-opacity'} key={el} to={el.toLocaleLowerCase()}>
						{el}
					</NavLink>
				))}
			</ul>
		</nav>
	)
}
