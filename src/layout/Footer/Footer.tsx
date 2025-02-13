import { SocialLinks } from './components'

import { Logo } from '@components'

import './styles.css'

export const Footer = () => {
	return (
		<footer className="flex flex-column">
			<div className="footer-main flex flex-sp-ev flex-center">
				<Logo isIntroFinished height={80} />
				<SocialLinks />
			</div>
			<div className="flex flex-column flex-center copyright">
				<p>©Electrical CyberTunes 2025. All Rights Reserved.</p>
				<p>Made by Barnabás Papp.</p>
			</div>
		</footer>
	)
}
