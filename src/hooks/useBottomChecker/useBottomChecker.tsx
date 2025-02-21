import { useEffect, useState } from 'react'

import { widthChecker } from '@helpers'

export const useBottomChecker = () => {
	const [onBottom, setOnBottom] = useState<boolean>(false)

	useEffect(() => {
		const checkForBottom = () => {
			const checkForMobile = widthChecker()

			setOnBottom(window.scrollY >= checkForMobile)
		}

		window.addEventListener('scroll', checkForBottom)

		return () => window.removeEventListener('scroll', checkForBottom)
	}, [])

	return onBottom
}
