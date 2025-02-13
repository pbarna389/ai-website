import { Logo } from '@components'

import './styles.css'

export const Footer = () => {
	return (
		<footer className="flex flex-column">
			<div className="footer-main flex flex-sp-ev flex-center">
				<Logo isIntroFinished height={80} />
				<p>Socials will be here</p>
			</div>
			<div className="flex flex-center">Site be me</div>
			<div className="flex flex-center">Copyright</div>
		</footer>
	)
}
