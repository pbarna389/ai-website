export type YoutubeModel = {
	etag: string
	items: ItemsModel[]
	kind: string
	nextPageToken: string
	pageInfo: PageInfoModel
	[key: string]: YTModelVariants
}

type YTModelVariants = string | PageInfoModel | ItemsModel[]

export type ContentModel = {
	videoId: string
	[key: string]: string | undefined
	videoPublishedAt?: string
}

export type ItemsModel = {
	contentDetails: ContentModel
	etag: string
	id: string
	kind: string
	[key: string]: string | ContentModel
}

export type PageInfoModel = {
	resultsPerPage: number
	totalResults: number
	[key: string]: number
}
