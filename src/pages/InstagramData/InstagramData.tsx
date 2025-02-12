import { InstaContent } from './components'

import { Skeleton } from '@components'
import { useGetInfiniteScrollData } from '@hooks'

import type { InstaContentModel, InstaModel } from '@types'

import './styles.css'

export const InstagramData = () => {
	const { data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
		useGetInfiniteScrollData<InstaModel>('pictures')

	const { pages } = data ? data : {}

	if (!data && error) {
		return <div>Something went down the shitter</div>
	}

	const instaData = pages?.reduce((arr: InstaContentModel[], curr) => {
		const nextBatch = curr.data

		arr.push(...nextBatch)

		return arr
	}, [])

	return (
		<div className="page">
			<div className="main-content instagram flex flex-center">
				{isFetching && !pages && <Skeleton amount={6} classNames="instagram" />}
				{instaData?.map((el, idx) => (
					<InstaContent
						key={el.id}
						data={el}
						idx={idx}
						hasNextPage={hasNextPage}
						fetchNextPage={fetchNextPage}
						currVideosAmount={instaData.length}
						isFetching={isFetchingNextPage}
					/>
				))}
				{isFetchingNextPage && <Skeleton amount={5} classNames="instagram" />}
			</div>
		</div>
	)
}
