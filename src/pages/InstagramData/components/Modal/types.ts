import type { Dispatch, SetStateAction } from 'react'

export type ModalProps = {
	callback: (setModal: Dispatch<SetStateAction<boolean>>, modalState: boolean) => void
	modalState: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}
