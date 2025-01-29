import { useEffect } from 'react'

import { useIntersectionObserver } from '@hooks'

import type { VideoPlayerProps } from './types'

export const VideoPlayer = ({
	link,
	idx,
	currVideosAmount,
	hasNextPage,
	isFetching,
	fetchNextPage
}: VideoPlayerProps) => {
	const { ref, isInView } = useIntersectionObserver()

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 70

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	return (
		<div ref={ref && ref}>
			<p>{link}</p>
			<iframe
				src={`https://www.youtube.com/embed/${link}`}
				width={`500px`}
				height={`360px`}
				allow="accelerometer; autoplay; encrypted-media; gyroscope;"
				sandbox="allow-scripts allow-same-origin allow-presentation"
			></iframe>
		</div>
	)
}
