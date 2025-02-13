import { useEffect } from 'react'

import { useIntersectionObserver } from '@hooks'

import type { VideoPlayerProps } from './types'

import './styles.css'

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
		<div ref={ref && ref} className={`trans-opacity ${isInView ? 'shown' : 'hidden'}`}>
			<iframe
				src={`https://www.youtube.com/embed/${link}`}
				allow="accelerometer; autoplay; encrypted-media; gyroscope;"
				sandbox="allow-scripts allow-same-origin allow-presentation"
			></iframe>
		</div>
	)
}
