import { useEffect } from 'react'

import { useVideoContext } from '@context'
import { useIntersectionObserver } from '@hooks'

import type { VideoPlayerProps } from './types'

import './styles.css'

export const VideoThumbnail = ({
	link,
	idx,
	currVideosAmount,
	hasNextPage,
	isFetching,
	fetchNextPage,
	thumbnails
}: VideoPlayerProps) => {
	const { videoState, videoSetter, prevVideoId } = useVideoContext()
	const { ref, isInView } = useIntersectionObserver()

	const { maxres } = thumbnails

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 70

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	const handleClick = () => {
		prevVideoId.current = videoState.link

		videoSetter({
			type: 'Youtube',
			isPlaying: true,
			link
		})
	}

	return (
		<div
			ref={ref && ref}
			className={`thumbnail trans-opacity ${isInView ? 'shown' : 'hidden'}`}
			onClick={handleClick}
		>
			<img src={maxres.url} alt={`thumbnail - ${idx}}`} />
		</div>
	)
}
