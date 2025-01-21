export const fetchData = async (url: string) => {
	const incomingData = await fetch(url)

	const data = await incomingData.json()

	return data
}
