import { Outlet } from 'react-router'

import { Navbar } from '@components'
import { VideoContextProvider } from '@context'
import { Footer, Header, Navigator, SocialPanel, VideoPlayer } from '@layout'

import 'styles.css'

export const App = () => {
	return (
		<>
			<Navigator />
			<Header />
			<SocialPanel />
			<Navbar />
			<VideoContextProvider>
				<Outlet />
				<VideoPlayer />
			</VideoContextProvider>
			<Footer />
		</>
	)
}
