import { useState } from 'react'

import girl1 from './assets/girl1.png'
import girl2 from './assets/girl2.png'
import girl3 from './assets/girl3.png'
import girl4 from './assets/girl4.png'

import { Logo } from './components'

import './styles.css'

export const Header = () => {
	const [isIntroFinished] = useState<boolean>(true)

	return (
		<header className={`${isIntroFinished && 'animated'}`}>
			<Logo />
			<img className={`img left first ${isIntroFinished && 'animated'}`} src={girl1} />
			<img className={`img left second ${isIntroFinished && 'animated'}`} src={girl2} />
			<img className={`img right first ${isIntroFinished && 'animated'}`} src={girl3} />
			<img className={`img right second ${isIntroFinished && 'animated'}`} src={girl4} />
		</header>
	)
}
