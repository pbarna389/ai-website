import { convertVideoLinks } from './utils'

import { VideoPlayer } from './components'

import { YT_API_KEY, YT_PLAYLIST_ID } from '@constants'
import { useGetQuery } from '@hooks'

import type { YoutubeModel } from '@types'
import type { ContentModel } from 'types/models/models'

export const YoutubeVideos = () => {
	const { data, error } = useGetQuery<YoutubeModel, ContentModel[]>(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${YT_PLAYLIST_ID}&key=${YT_API_KEY}`,
		'youtubeData',
		convertVideoLinks
	)

	if (error && !data) {
		return <p>Something went down the shitter, please try again later!</p>
	}

	return <div>{data?.map((el) => <VideoPlayer key={el.videoId} link={el.videoId} />)}</div>
}
