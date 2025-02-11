import type { Dispatch, SetStateAction } from 'react'

import { createPortal } from 'react-dom'

import './style.css'

type ModalProps = {
	callback: (setModal: Dispatch<SetStateAction<boolean>>, modalState: boolean) => void
	modalState: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ modalState, setModal, callback }: ModalProps) => {
	return createPortal(
		<div className="modal">
			<p>Modal</p>
			<button type={'button'} onClick={() => callback(setModal, modalState)} />
		</div>,
		document.body
	)
}
