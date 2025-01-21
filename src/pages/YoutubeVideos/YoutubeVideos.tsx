import { YT_PLAYLIST_ID, YT_API_KEY } from '@constants'
import { useGetQuery } from 'hooks/useGetQuery'

export const YoutubeVideos = () => {
	const { data } = useGetQuery(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${YT_PLAYLIST_ID}&key=${YT_API_KEY}`,
		'youtubeData'
	)

	console.log(data)

	return <div>Videos will be here</div>
}
