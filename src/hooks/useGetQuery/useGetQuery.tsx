import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

export const useGetQuery = <IncomingType, ReturnType = IncomingType>(
	url: string,
	queryKey: string,
	selectFunction?: (item: IncomingType) => ReturnType
) => {
	const data: UseQueryResult<ReturnType, Error> = useQuery({
		queryKey: [url, queryKey],
		queryFn: () => fetchData<IncomingType>(url),
		select: selectFunction
	})

	return data
}
