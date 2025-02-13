import type { InfiniteData } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

import type { InstaPageInfo } from 'types/models/models'

export const useGetInfiniteScrollData = <
	DataType extends { nextPageToken?: string; paging?: InstaPageInfo }
>(
	queryKey: string
) => {
	const incomingData = useInfiniteQuery<
		DataType,
		Error,
		InfiniteData<DataType, string>,
		unknown[],
		string
	>({
		queryKey: [queryKey],
		queryFn: ({ pageParam }) => fetchData(queryKey, pageParam),
		initialPageParam: '',
		getNextPageParam: (lastPage) => {
			if ('paging' in lastPage) {
				return lastPage.paging?.next ? lastPage.paging.cursors.after : null
			}

			return lastPage.nextPageToken || null
		}
	})

	return incomingData
}
