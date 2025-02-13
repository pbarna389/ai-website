import { socialLinks } from '@constants'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

import './styles.css'
import type { SocialPickTypes } from '@types'

const iconSize = 40

const socials: SocialPickTypes = {
	Youtube: <FaYoutube size={iconSize} />,
	Facebook: <FaFacebookSquare size={iconSize} />,
	Instagram: <FaSquareInstagram size={iconSize} />
}

export const SocialLinks = () => {
	return (
		<div className="social flex">
			{socialLinks.map((el) => (
				<a className={`link-${el}`} key={`social-link-${el}`} href={`${el}`} target="_blank">
					{socials[el]}
				</a>
			))}
		</div>
	)
}
