import type { Dispatch, SetStateAction } from 'react'

export const handleModalState = (
	setModal: Dispatch<SetStateAction<boolean>>,
	modalState: boolean
) => {
	const { body } = document

	body.classList.toggle('scrollbar-disabled')

	setModal(!modalState)
}

export const textConverter = <T1 extends string>(text: T1): Lowercase<T1> => {
	const result: Lowercase<T1> = text.toLowerCase() as Lowercase<T1>

	return result
}
