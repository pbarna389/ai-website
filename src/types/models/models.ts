export type YoutubeModel = {
	etag: string
	items: YTItemsModel[]
	kind: string
	nextPageToken: string
	pageInfo: YTPageInfoModel
	[key: string]: YTModelVariants
}

type YTModelVariants = string | YTPageInfoModel | YTItemsModel[]

export type YTContentModel = {
	videoId: string
	[key: string]: string | undefined
	videoPublishedAt?: string
}

export type YTItemsModel = {
	contentDetails: YTContentModel
	etag: string
	id: string
	kind: string
	[key: string]: string | YTContentModel
}

export type YTPageInfoModel = {
	resultsPerPage: number
	totalResults: number
	[key: string]: number
}

export type InstaModel = {
	data: InstaContentModel[]
	paging: InstaPageInfo
}

type InstaMediaTypes = Uppercase<'video' | 'image' | 'canvas'>

export type InstaContentModel = {
	id: string
	media_type: InstaMediaTypes
	media_url: string
	[key: string]: string | InstaMediaTypes | undefined
	thumbnail_url?: string
}

export type InstaCursor = {
	after: string
	before: string
}

export type InstaPageInfo = {
	cursors: InstaCursor
	next?: string
	previous?: string
}
