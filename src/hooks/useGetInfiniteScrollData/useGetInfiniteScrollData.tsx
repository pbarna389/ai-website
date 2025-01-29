import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

export const useGetInfiniteScrollData = <IncomingType extends { nextPageToken: string }>(
	url: string,
	queryKey: string
) => {
	const incomingData = useInfiniteQuery<
		IncomingType,
		Error,
		InfiniteData<IncomingType, string>,
		unknown[],
		string
	>({
		queryKey: [queryKey, url],
		queryFn: ({ pageParam }) => fetchData(url, pageParam),
		initialPageParam: '',
		getNextPageParam: (lastPage) => lastPage.nextPageToken || null
	})

	return incomingData
}
