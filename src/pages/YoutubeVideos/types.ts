import type { YTContentModel, YTPageInfoModel, YTThumbnailModel } from '@types'

export type YTMergedObject = {
	thumbnails: YTThumbnailModel
	title: string
	videoId: string
	[key: string]: string | YTThumbnailModel | undefined
	videoPublishedAt?: string
}

export type YoutubeReturnType = {
	nextPageToken: string
	normalizedData: YTContentModel[]
	pageInfo: YTPageInfoModel
}
