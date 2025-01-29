import type { ContentModel } from '@types'
import type { PageInfoModel } from 'types/models/models'

export type YoutubeReturnType = {
	nextPageToken: string
	normalizedData: ContentModel[]
	pageInfo: PageInfoModel
}
