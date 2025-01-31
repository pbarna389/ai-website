import { useEffect, useState } from 'react'

import { createPortal } from 'react-dom'

import { Modal } from '../Modal'

import { useIntersectionObserver } from '@hooks'

import type { InstaPicturesProps } from './types'

export const InstaPictures = ({
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

	const handleModalOpen = () => {
		setModalOpen(true)
	}

	return (
		<>
			<img
				ref={ref && ref}
				src={decideImgUrl}
				style={{ width: '500px', height: '360px' }}
				onClick={() => handleModalOpen()}
			/>
			{modalOpen && <Modal closeModal={setModalOpen} />}
		</>
	)
}
