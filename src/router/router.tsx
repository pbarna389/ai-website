import { createBrowserRouter } from 'react-router-dom'

import { Home, InstagramData, YoutubeVideos } from '@pages'
import { App } from 'App'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				children: [
					{
						index: true,
						element: <Home />
					},
					{
						path: '/youtube',
						element: <YoutubeVideos />
					},
					{
						path: '/instagram',
						element: <InstagramData />
					}
				]
			}
		]
	}
])
