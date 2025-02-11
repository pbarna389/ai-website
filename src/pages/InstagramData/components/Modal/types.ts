import type { Dispatch, SetStateAction } from 'react'

import type { InstaContentModel } from '@types'

export type ModalProps = {
	callback: (setModal: Dispatch<SetStateAction<boolean>>, modalState: boolean) => void
	data: InstaContentModel
	modalState: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}
