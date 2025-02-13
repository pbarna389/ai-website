import { Outlet } from 'react-router'

import { Navbar } from '@components'
import { Footer, Header, Navigator } from '@layout'

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
