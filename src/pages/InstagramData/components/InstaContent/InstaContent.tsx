import { useEffect, useState } from 'react'

import { handleModalState, textConverter } from './utils'

import { Modal } from '../Modal'

import { Ribbon } from '@components'
import { useVideoContext } from '@context'
import { handleVideoStart } from '@helpers'
import { useIntersectionObserver } from '@hooks'

import type { InstaPicturesProps } from './types'

export const InstaContent = ({
	data,
	currVideosAmount,
	fetchNextPage,
	hasNextPage,
	isFetching,
	idx
}: InstaPicturesProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const { videoState, videoSetter, prevVideoId } = useVideoContext()

	const { ref, isInView } = useIntersectionObserver()

	const { link } = videoState
	const { thumbnail_url, media_url, media_type } = data

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 60

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	const decideImgUrl = thumbnail_url ? thumbnail_url : media_url

	const shouldModalCalled = media_type === 'IMAGE' || media_type === 'CANVAS'

	const ribbonText = textConverter(media_type)

	return (
		<div className="thumbnail-wrapper">
			<div
				className="thumbnail"
				onClick={() =>
					shouldModalCalled
						? handleModalState(setModalOpen, modalOpen)
						: handleVideoStart(
								{ currentLink: link, newLink: media_url, prevVideo: prevVideoId, videoSetter },
								'Instagram'
							)
				}
			>
				<Ribbon text={ribbonText} />
				<img
					className={`${isInView ? 'shown' : 'hidden'} ${media_url === link && 'selected'}`}
					ref={ref && ref}
					src={decideImgUrl}
					alt={'thumbnail for instagram - PICTURE DESC WILL COME HERE'}
				/>
			</div>
			{modalOpen && shouldModalCalled && (
				<Modal data={data} callback={handleModalState} modalState={modalOpen} setModal={setModalOpen} />
			)}
		</div>
	)
}
