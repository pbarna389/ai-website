import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { scrollToTop } from './utils'

import { pageLinks } from '@constants'

import './styles.css'

export const Navbar = () => {
	const [isOnTop, setIsOnTop] = useState<boolean>(true)

	useEffect(() => {
		const checkScrollbarOnTop = () => {
			setIsOnTop(window.scrollY === 0)
		}

		window.addEventListener('scroll', checkScrollbarOnTop)

		return () => window.removeEventListener('scroll', checkScrollbarOnTop)
	}, [])

	const checkForTop = isOnTop ? 'top' : ''

	return (
		<nav className={`${checkForTop} trans-opacity`}>
			<ul className={`${checkForTop && 'top'}`}>
				{pageLinks.map((el) => (
					<li key={el} onClick={scrollToTop}>
						<NavLink className={'font-teko trans-opacity'} to={el.toLocaleLowerCase()}>
							{el}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
