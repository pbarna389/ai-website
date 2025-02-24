import { useEffect } from 'react'

import { Ribbon } from '@components'
import { useVideoContext } from '@context'
import { handleVideoStart } from '@helpers'
import { useIntersectionObserver } from '@hooks'

import type { VideoPlayerProps } from './types'

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

	return (
		<div
			className="thumbnail-wrapper"
			onClick={() =>
				handleVideoStart(
					{ currentLink: videoState.link, newLink: link, prevVideo: prevVideoId, videoSetter },
					'Youtube'
				)
			}
		>
			<div ref={ref && ref} className={`thumbnail trans-opacity ${isInView ? 'shown' : 'hidden'}`}>
				<Ribbon text={'video'} />
				<img
					src={maxres.url}
					className={`${videoState.link === link && 'selected'}`}
					alt={`thumbnail - ${idx}}`}
				/>
			</div>
		</div>
	)
}
