import { Outlet } from 'react-router'

import { Navbar } from '@components'
import { Footer, Header } from '@layout'

import 'styles.css'

export const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
