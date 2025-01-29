import { RouterProvider } from 'react-router'

import { Footer, Header } from '@components'
import { router } from '@router'

export const App = () => {
	return (
		<>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</>
	)
}
