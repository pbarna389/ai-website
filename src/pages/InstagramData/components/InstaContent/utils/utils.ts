import type { Dispatch, SetStateAction } from 'react'

export const handleModalState = (
	setModal: Dispatch<SetStateAction<boolean>>,
	modalState: boolean
) => {
	document.body.classList.toggle('scrollbar-disabled')
	setModal(!modalState)
}
