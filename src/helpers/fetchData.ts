import {
	INSTA_ACCESS_TOKEN,
	INSTA_API_KEY,
	INSTA_SITE,
	YT_API_KEY,
	YT_PLAYLIST_ID,
	YT_SITE
} from '@constants'

//graph.instagram.com/v21.0/17841469554791844/media?fields=id,caption,media_type,media_url,timestamp&access_token=IGAAI9ANZBGTMJBZAE53czJGbS1jcVRKWXJQSXk3R1NwSTZAnTklWWHMxZA1oxc3k1am91c0tuakVOSEVIR0U3SHV5RkVra2tzX1hnS0hVQWVEVjZAXZAEtaWk1fZA3pTQ0Q5d0tvdmwwMkpJc3FJbDVuTTB5TlZAoSjM5ZAFBZAd2x5cExiZAwZDZD&limit=5

export const fetchData = async <DataT>(queryName: string, pageParam: string): Promise<DataT> => {
	const fullUrl =
		queryName === 'videos'
			? `${YT_SITE}${YT_PLAYLIST_ID}&key=${YT_API_KEY}${pageParam && `&pageToken=${pageParam}`}`
			: `${INSTA_SITE}${INSTA_API_KEY}/media?fields=id,media_type,media_url&limit=5&access_token=${INSTA_ACCESS_TOKEN}${pageParam && `&after={pageParam}`}`

	const incomingData = await fetch(fullUrl)

	const data: Promise<DataT> = await incomingData.json()

	return data
}
