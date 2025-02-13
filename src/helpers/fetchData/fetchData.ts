import {
	INSTA_ACCESS_TOKEN,
	INSTA_API_KEY,
	INSTA_SITE,
	YT_API_KEY,
	YT_PLAYLIST_ID,
	YT_SITE
} from '@constants'

export const fetchData = async <DataT>(queryName: string, pageParam: string): Promise<DataT> => {
	const fullUrl =
		queryName === 'videos'
			? `${YT_SITE}${YT_PLAYLIST_ID}&key=${YT_API_KEY}${pageParam && `&pageToken=${pageParam}`}`
			: `${INSTA_SITE}${INSTA_API_KEY}/media?fields=id,media_url,media_type,thumbnail_url&limit=6&access_token=${INSTA_ACCESS_TOKEN}${pageParam && `&after=${pageParam}`}`

	const incomingData = await fetch(fullUrl)

	const data: Promise<DataT> = await incomingData.json()

	return data
}
