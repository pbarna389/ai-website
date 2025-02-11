import { useEffect, useState } from 'react'

import { handleModalState } from './utils'

import { Modal } from '../Modal'

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

	const { ref, isInView } = useIntersectionObserver()

	const { thumbnail_url, media_url } = data

	useEffect(() => {
		const currentVideoPercent = Math.floor((idx / currVideosAmount) * 100) > 70

		if (isInView && currentVideoPercent && hasNextPage && !isFetching) {
			fetchNextPage()
		}
	}, [isInView, idx, currVideosAmount, hasNextPage, isFetching, fetchNextPage])

	const decideImgUrl = thumbnail_url ? thumbnail_url : media_url

	return (
		<>
			<div className="insta-img-wrapper">
				<img
					className={`${isInView ? 'shown' : 'hidden'}`}
					ref={ref && ref}
					src={decideImgUrl}
					onClick={() => handleModalState(setModalOpen, modalOpen)}
				/>
			</div>
			{modalOpen && (
				<Modal data={data} callback={handleModalState} modalState={modalOpen} setModal={setModalOpen} />
			)}
		</>
	)
}
