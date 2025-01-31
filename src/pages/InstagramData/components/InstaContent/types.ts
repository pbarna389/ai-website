import type {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult
} from '@tanstack/react-query'

import type { InstaContentModel, InstaModel } from '@types'

export type InstaPicturesProps = {
	currVideosAmount: number
	data: InstaContentModel
	fetchNextPage: (
		options?: FetchNextPageOptions
	) => Promise<InfiniteQueryObserverResult<InfiniteData<InstaModel, string>, Error>>
	hasNextPage: boolean
	idx: number
	isFetching: boolean
}
