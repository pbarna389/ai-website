import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

export const useGetInfiniteScrollData = <IncomingType extends { nextPageToken: string }>(
	queryKey: string
) => {
	const incomingData = useInfiniteQuery<
		IncomingType,
		Error,
		InfiniteData<IncomingType, string>,
		unknown[],
		string
	>({
		queryKey: [queryKey],
		queryFn: ({ pageParam }) => fetchData(queryKey, pageParam),
		initialPageParam: '',
		getNextPageParam: (lastPage) => lastPage.nextPageToken || null
	})

	return incomingData
}
