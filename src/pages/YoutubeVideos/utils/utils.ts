import type { YoutubeReturnType } from '../types'
import type { YoutubeModel } from '@types'

export const convertVideoLinks = (incomingData: YoutubeModel): YoutubeReturnType => {
	const normalizedData = incomingData.items.map((element) => element.contentDetails)

	return {
		normalizedData,
		nextPageToken: incomingData.nextPageToken,
		pageInfo: incomingData.pageInfo
	}
}
