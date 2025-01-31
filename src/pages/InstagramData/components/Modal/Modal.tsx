import type { Dispatch, SetStateAction } from 'react'

import { createPortal } from 'react-dom'

import './style.css'

type ModalProps = {
	closeModal: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ closeModal }: ModalProps) => {
	const handleCloseModal = () => {
		closeModal(false)
	}

	return createPortal(
		<div className="modal">
			<p>Modal</p>
			<button type={'button'} onClick={() => handleCloseModal()} />
		</div>,
		document.body
	)
}
