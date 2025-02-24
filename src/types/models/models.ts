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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum ThumbnailNameEnum {
	default,
	medium,
	high,
	standard,
	maxres
}

type ThumbnailTypes = keyof typeof ThumbnailNameEnum

type ThumbnailDetails = {
	height: number
	url: string
	width: number
}

export type YTThumbnailModel = {
	[key in ThumbnailTypes]: ThumbnailDetails
}

export type YTSnippetModel = {
	thumbnails: YTThumbnailModel
	title: string
	[key: string]: string | YTThumbnailModel
}

export type YTItemsModel = {
	contentDetails: YTContentModel
	etag: string
	id: string
	kind: string
	snippet: YTSnippetModel
	[key: string]: string | YTContentModel | YTSnippetModel
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

export type InstaMediaTypes = Uppercase<'image' | 'canvas' | 'video'>

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
