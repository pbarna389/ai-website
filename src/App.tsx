import { Outlet } from 'react-router'

import { Navbar } from '@components'
import { Footer, Header, Navigator, SocialPanel } from '@layout'

import 'styles.css'

export const App = () => {
	return (
		<>
			<Navbar />
			<Navigator />
			<SocialPanel />
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
