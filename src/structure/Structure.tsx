import { Outlet } from 'react-router'

import { Navbar } from '@components'

export const Structure = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	)
}
