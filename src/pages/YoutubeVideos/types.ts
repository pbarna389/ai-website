import type { YTContentModel, YTPageInfoModel } from '@types'

export type YoutubeReturnType = {
	nextPageToken: string
	normalizedData: YTContentModel[]
	pageInfo: YTPageInfoModel
}
