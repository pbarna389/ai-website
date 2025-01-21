import { Navbar } from '@components'

import { Outlet } from 'react-router'

export const App = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}
