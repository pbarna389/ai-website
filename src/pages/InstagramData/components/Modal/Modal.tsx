import { createPortal } from 'react-dom'

import { InstaCanvas, InstaPicture } from './components'

import type { InstaContentModel } from '@types'

import type { ModalProps } from './types'

import './style.css'

const ComponentSelector = (data: InstaContentModel) => {
	return {
		IMAGE: <InstaPicture data={data} />,
		CANVAS: <InstaCanvas data={data} />
	}
}

export const Modal = ({ modalState, setModal, callback, data }: ModalProps) => {
	return createPortal(
		<>
			<div className="modal" onClick={() => callback(setModal, modalState)}>
				<button type="button" className="close" />
			</div>
			{ComponentSelector(data)[data.media_type]}
		</>,
		document.body
	)
}
