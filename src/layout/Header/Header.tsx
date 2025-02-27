import { useCallback, useState } from 'react'

import girl1 from './assets/girl1.png'
import girl2 from './assets/girl2.png'
import girl3 from './assets/girl3.png'
import girl4 from './assets/girl4.png'

import { Logo } from '@components'

import './styles.css'

export const Header = () => {
	const [isIntroFinished, setIntroFinished] = useState<boolean>(false)

	const handleIntro = useCallback(() => {
		setTimeout(() => {
			setIntroFinished(true)
		}, 5000)
	}, [])

	handleIntro()

	return (
		<header className={`flex no-select ${isIntroFinished ? 'animated' : 'intro'}`}>
			<img
				className={`img left first ${isIntroFinished && 'animated'}`}
				src={girl1}
				alt={'Header left girl one'}
			/>
			<img
				className={`img left second ${isIntroFinished ? 'animated' : 'intro-anim'}`}
				src={girl2}
				alt={'Header left girl two'}
			/>
			<Logo isIntroFinished={isIntroFinished} width={600} height={158} />
			<img
				className={`img right first ${isIntroFinished && 'animated'}`}
				src={girl3}
				alt={'Header right girl one'}
			/>
			<img
				className={`img right second ${isIntroFinished ? 'animated' : 'intro-anim'}`}
				src={girl4}
				alt={'Header right girl two'}
			/>
		</header>
	)
}
