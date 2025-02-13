import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { scrollToTop } from './utils'

import './styles.css'
import { pageLinks } from '@constants'

export const Navbar = () => {
	const [isOnTop, setIsOnTop] = useState<boolean>(true)

	useEffect(() => {
		const checkScrollbarOnTop = () => {
			setIsOnTop(window.scrollY === 0)
		}

		window.addEventListener('scroll', checkScrollbarOnTop)

		return () => window.removeEventListener('scroll', checkScrollbarOnTop)
	}, [])

	return (
		<nav className="trans-opacity">
			<ul className={`${isOnTop && 'top'}`}>
				{pageLinks.map((el) => (
					<div key={el} onClick={scrollToTop}>
						<NavLink className={'font-teko trans-opacity'} to={el.toLocaleLowerCase()}>
							{el}
						</NavLink>
					</div>
				))}
			</ul>
		</nav>
	)
}
