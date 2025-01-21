import { Header, Navbar } from '@components'

import { Outlet } from 'react-router'

import { useGetQuery } from 'hooks/useGetQuery'

import { YT_API_KEY, YT_PLAYLIST_ID } from '@constants'

export const App = () => {
	const { data } = useGetQuery(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${YT_PLAYLIST_ID}&key=${YT_API_KEY}`,
		'youtubeData'
	)

	console.log(data)

	return (
		<div>
			<Header />
			<Navbar />
			<Outlet />
		</div>
	)
}
