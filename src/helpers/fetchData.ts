import { YT_API_KEY, YT_PLAYLIST_ID, YT_SITE } from '@constants'

export const fetchData = async <DataT>(queryName: string, token: string): Promise<DataT> => {
	const fullUrl =
		queryName === 'youtubeData'
			? `${YT_SITE}${YT_PLAYLIST_ID}&key=${YT_API_KEY}${token && `&pageToken=${token}`}`
			: ''

	const incomingData = await fetch(fullUrl)

	const data: Promise<DataT> = await incomingData.json()

	return data
}
