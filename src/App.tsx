import { Outlet } from 'react-router'

import { Navbar, Navigator } from '@components'
import { Footer, Header } from '@layout'

import 'styles.css'

export const App = () => {
	return (
		<>
			<Navbar />
			<Navigator />
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
