import { createPortal } from 'react-dom'

import type { ModalProps } from './types'

import './style.css'

export const Modal = ({ modalState, setModal, callback }: ModalProps) => {
	return createPortal(
		<div className="modal">
			<p>Modal</p>
			<button type={'button'} onClick={() => callback(setModal, modalState)} />
		</div>,
		document.body
	)
}
