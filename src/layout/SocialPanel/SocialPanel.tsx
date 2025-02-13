import { useEffect, useState } from 'react'

import { SocialLinks } from '@components'
import { widthChecker } from '@helpers'

import './styles.css'

export const SocialPanel = () => {
	const [onBottom, setOnBottom] = useState<boolean>(false)

	useEffect(() => {
		const checkForBottom = () => {
			const checkForMobile = widthChecker()

			setOnBottom(window.scrollY >= checkForMobile)
		}

		window.addEventListener('scroll', checkForBottom)

		return () => window.removeEventListener('scroll', checkForBottom)
	}, [])

	return (
		<div className={`socialPanel ${onBottom && 'invisible'}`}>
			<div className="social-helper" />
			<SocialLinks />
		</div>
	)
}
