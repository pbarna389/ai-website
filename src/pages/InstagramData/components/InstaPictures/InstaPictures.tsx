import { useEffect } from 'react'

import type {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult
} from '@tanstack/react-query'

import { useIntersectionObserver } from '@hooks'

import type { InstaModel } from '@types'

type InstaPicturesProps = {
	currVideosAmount: number
	fetchNextPage: (
		options?: FetchNextPageOptions
	) => Promise<InfiniteQueryObserverResult<InfiniteData<InstaModel, string>, Error>>
	hasNextPage: boolean
	idx: number
	isFetching: boolean
	url: string
}

export const InstaPictures = ({
	url,
	currVideosAmount,
	fetchNextPage,
	hasNextPage,
	isFetching,
	idx
}: InstaPicturesProps) => {
	const { ref, isInView } = useIntersectionObserver()

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 70

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	return <img ref={ref && ref} src={url} style={{ width: '500px', height: '360px' }} />
}
