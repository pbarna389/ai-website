import { Outlet } from 'react-router'

import { Navbar } from '@components'

export const Layout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}
