import girl1 from './assets/girl1.png'
import girl2 from './assets/girl2.png'
import girl3 from './assets/girl3.png'
import girl4 from './assets/girl4.png'

import './styles.css'

export const Header = () => {
	return (
		<header>
			<img className={'img left first'} src={girl1} />
			<img className={'img left second'} src={girl2} />
			<img className={'img right first'} src={girl3} />
			<img className={'img right second'} src={girl4} />
		</header>
	)
}
