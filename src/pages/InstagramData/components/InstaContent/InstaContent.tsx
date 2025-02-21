import { useEffect, useState } from 'react'

import { handleModalState } from './utils'

import { Modal } from '../Modal'

import { useVideoContext } from '@context'
import { useIntersectionObserver } from '@hooks'

import type { InstaPicturesProps } from './types'

import './styles.css'

export const InstaContent = ({
	data,
	currVideosAmount,
	fetchNextPage,
	hasNextPage,
	isFetching,
	idx
}: InstaPicturesProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const { videoSetter } = useVideoContext()

	const { ref, isInView } = useIntersectionObserver()

	const { thumbnail_url, media_url, media_type } = data

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 60

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	const decideImgUrl = thumbnail_url ? thumbnail_url : media_url

	const shouldModalCalled = media_type === 'IMAGE' || media_type === 'CANVAS'

	const handleVideo = () => {
		videoSetter(() => {
			return {
				isPlaying: true,
				isStarted: true,
				link: media_url,
				type: 'Instagram'
			}
		})
	}

	return (
		<>
			<div className="insta-img-wrapper">
				<img
					className={`${isInView ? 'shown' : 'hidden'}`}
					ref={ref && ref}
					src={decideImgUrl}
					onClick={() => (shouldModalCalled ? handleModalState(setModalOpen, modalOpen) : handleVideo())}
				/>
			</div>
			{modalOpen && shouldModalCalled && (
				<Modal data={data} callback={handleModalState} modalState={modalOpen} setModal={setModalOpen} />
			)}
		</>
	)
}
