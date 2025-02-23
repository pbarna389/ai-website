import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaRedditAlien } from 'react-icons/fa6'

import { socialLinks } from '@constants'

import { iconSize } from './constants'

import type { SocialPickTypes } from '@types'

import './styles.css'

const socials: SocialPickTypes = {
	Youtube: <FaYoutube size={iconSize} />,
	Facebook: <FaFacebookF size={iconSize} />,
	Instagram: <FaInstagram size={iconSize} />,
	TikTok: <FaTiktok size={iconSize} />,
	Reddit: <FaRedditAlien size={iconSize} />,
	X: <FaXTwitter size={iconSize} />
}

export const SocialLinks = () => {
	return (
		<div className="social flex flex-wrap">
			{socialLinks.map(({ socialName, link }) => (
				<a
					className={`link-${socialName}`}
					key={`social-link-${link}`}
					href={`${link}`}
					target="_blank"
					aria-label={socialName}
				>
					{socials[socialName]}
				</a>
			))}
		</div>
	)
}
