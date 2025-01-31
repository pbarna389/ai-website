import type { Dispatch, SetStateAction } from 'react'

import { createPortal } from 'react-dom'

type ModalProps = {
	closeModal: Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ closeModal }: ModalProps) => {
	const handleCloseModal = () => {
		closeModal(false)
	}

	return createPortal(<div onClick={() => handleCloseModal()}>Modal</div>, document.body)
}
