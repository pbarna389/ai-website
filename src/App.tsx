import { Outlet } from 'react-router'

import { Footer, Header, Navbar } from '@components'

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
