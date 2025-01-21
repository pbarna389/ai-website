import { YT_API_KEY, YT_PLAYLIST_ID } from '@constants'
import { useGetQuery } from '@hooks'

export const YoutubeVideos = () => {
	const { data } = useGetQuery(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${YT_PLAYLIST_ID}&key=${YT_API_KEY}`,
		'youtubeData'
	)

	// eslint-disable-next-line no-console
	console.log(data)

	return <div>Videos will be here</div>
}
