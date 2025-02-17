import { SocialLinks } from '@components'
import { useBottomChecker } from '@hooks'

import './styles.css'

export const SocialPanel = () => {
	const onBottom = useBottomChecker()

	return (
		<div className={`socialPanel ${onBottom && 'invisible'}`}>
			<div className="social-helper" />
			<SocialLinks />
		</div>
	)
}
