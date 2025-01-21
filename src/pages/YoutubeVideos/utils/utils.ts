import type { YoutubeModel } from '@types'
import type { ContentModel } from 'types/models/models'

export const convertVideoLinks = (data: YoutubeModel): ContentModel[] => {
	const normalizedData = data.items.map((element) => element.contentDetails)

	return normalizedData
}
