import { useEffect, useState } from 'react'

import { handleClick } from './helpers'
import { FaArrowUp } from 'react-icons/fa'

import './styles.css'

export const Navigator = () => {
	const [visible, setVisible] = useState(false)
	const [onBottom, setOnBottom] = useState(false)

	useEffect(() => {
		const checkScrollbarOnMovement = () => {
			setVisible(window.scrollY >= 20)
			setOnBottom(window.scrollY >= document.body.scrollHeight - window.innerHeight - 20)
		}

		window.addEventListener('scroll', checkScrollbarOnMovement)

		return () => window.removeEventListener('scroll', checkScrollbarOnMovement)
	}, [])

	return (
		<div
			className={`navigator ${!visible && 'invisible'} ${onBottom && 'aroundBottom'}`}
			onClick={handleClick}
		>
			<FaArrowUp size={20} />
		</div>
	)
}
