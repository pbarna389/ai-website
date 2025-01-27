export const fetchData = async <DataT>(url: string, token: string): Promise<DataT> => {
	const fullUrl = `${token.length ? `${url}&pageToken=${token}` : `${url}`}`

	const incomingData = await fetch(fullUrl)

	const data: Promise<DataT> = await incomingData.json()

	return data
}
