export const widthChecker = (mobileMinus = 250, desktopMinus = 190) => {
	const checkForMobile =
		window.innerWidth < 768
			? document.body.scrollHeight - window.innerHeight - mobileMinus
			: document.body.scrollHeight - window.innerHeight - desktopMinus

	return checkForMobile
}
