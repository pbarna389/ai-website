import { createPortal } from 'react-dom'

import { InstaCanvas, InstaPicture, InstaVideo } from './components'

import type { InstaContentModel } from '@types'

import type { ModalProps } from './types'

import './style.css'

const ComponentSelector = (data: InstaContentModel) => {
	return {
		VIDEO: <InstaVideo data={data} />,
		IMAGE: <InstaPicture data={data} />,
		CANVAS: <InstaCanvas data={data} />
	}
}

export const Modal = ({ modalState, setModal, callback, data }: ModalProps) => {
	return createPortal(
		<div className="modal">
			{ComponentSelector(data)[data.media_type]}
			<button type={'button'} onClick={() => callback(setModal, modalState)} />
		</div>,
		document.body
	)
}
