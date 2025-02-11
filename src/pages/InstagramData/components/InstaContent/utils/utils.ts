export const handleModalState = (
	setModal: React.Dispatch<React.SetStateAction<boolean>>,
	modalState: boolean
) => {
	document.body.classList.toggle('scrollbar-disabled')
	setModal(!modalState)
}
