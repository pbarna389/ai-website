export const widthChecker = () => {
	const checkForMobile =
		window.innerWidth < 768
			? document.body.scrollHeight - window.innerHeight - 250
			: document.body.scrollHeight - window.innerHeight - 50

	return checkForMobile
}
