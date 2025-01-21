import { Footer, Header } from '@components'

import { RouterProvider } from 'react-router'
import { router } from 'router'

export const App = () => {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</>
	)
}
