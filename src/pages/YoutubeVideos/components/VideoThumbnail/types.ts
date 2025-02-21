import type {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult
} from '@tanstack/react-query'

import type { YoutubeModel, YTThumbnailModel } from '@types'

export type VideoPlayerProps = {
	currVideosAmount: number
	fetchNextPage: (
		options?: FetchNextPageOptions
	) => Promise<InfiniteQueryObserverResult<InfiniteData<YoutubeModel, string>, Error>>
	hasNextPage: boolean
	idx: number
	isFetching: boolean
	link: string
	thumbnails: YTThumbnailModel
}
