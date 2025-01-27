import { type Dispatch, type SetStateAction, useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { fetchData } from '@helpers'

import type { ContentModel } from '@types'
import type { YoutubeReturnType } from 'pages/YoutubeVideos/types'

export const useGetQuery = <IncomingType,>(
	url: string,
	queryKey: string,
	helpers: {
		setShownData: Dispatch<SetStateAction<ContentModel[]>>
		selectFunction?: (item: IncomingType) => YoutubeReturnType
	}
) => {
	const [maxPage, setMaxPage] = useState<number>(0)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [token, setToken] = useState<string>('')

	const { selectFunction, setShownData } = helpers

	const incomingData = useQuery({
		queryKey: [url, queryKey, currentPage, token],
		queryFn: () => fetchData<IncomingType>(url, token),
		select: selectFunction
	})

	const { pageInfo } = incomingData.data ? incomingData.data : {}

	const totalResults = pageInfo?.totalResults
	const resultsPerPage = pageInfo?.resultsPerPage

	if (totalResults && resultsPerPage && !maxPage) {
		setMaxPage(totalResults % resultsPerPage)
	}

	if (currentPage <= maxPage && incomingData.data) {
		setShownData((prev) => [...prev, ...incomingData.data.normalizedData])
		setCurrentPage((prev) => prev + 1)
		if (incomingData.data?.nextPageToken) {
			setToken(incomingData?.data?.nextPageToken)
		}
	}

	return incomingData
}
