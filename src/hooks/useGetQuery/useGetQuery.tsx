import { useQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

export const useGetQuery = (url: string, queryKey: string) => {
	const data = useQuery({
		queryKey: [url, queryKey],
		queryFn: () => fetchData(url)
	})

	return data
}
