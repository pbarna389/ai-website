import { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { scrollToTop } from './utils'

import './styles.css'
import { links } from '@constants'

export const Navbar = () => {
	const [isOnTop, setIsOnTop] = useState<boolean>(true)

	useEffect(() => {
		const checkScrollbarOnTop = () => {
			return window.scrollY === 0 ? setIsOnTop(true) : setIsOnTop(false)
		}

		window.addEventListener('scroll', checkScrollbarOnTop)

		return () => window.removeEventListener('scroll', checkScrollbarOnTop)
	})

	return (
		<nav className="trans-opacity">
			<ul className={`${isOnTop && 'top'}`}>
				{links.map((el) => (
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
