import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '@layout'
import { Home, InstagramData, YoutubeVideos } from '@pages'

export const router = createBrowserRouter([
	{
		element: <Layout />,
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
						path: '/insta',
						element: <InstagramData />
					}
				]
			}
		]
	}
])
