export const fetchData = async <DataT>(url: string): Promise<DataT> => {
	const incomingData = await fetch(url)

	const data: Promise<DataT> = await incomingData.json()

	return data
}
