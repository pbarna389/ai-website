import { createBrowserRouter } from 'react-router-dom'

import { Home, InstagramPictures, YoutubeVideos } from '@pages'
import { Structure } from '@structure'

export const router = createBrowserRouter([
	{
		element: <Structure />,
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
						element: <InstagramPictures />
					}
				]
			}
		]
	}
])
