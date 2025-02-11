import { InstaContent } from './components'

import { useGetInfiniteScrollData } from '@hooks'

import type { InstaContentModel, InstaModel } from '@types'

export const InstagramData = () => {
	const { data, error, isFetching, fetchNextPage, hasNextPage } =
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
		<div className="page" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			{instaData?.map((el, idx) => (
				<InstaContent
					key={el.id}
					data={el}
					idx={idx}
					hasNextPage={hasNextPage}
					fetchNextPage={fetchNextPage}
					currVideosAmount={instaData.length}
					isFetching={isFetching}
				/>
			))}
			{isFetching && <div>FETCH NEW DATA</div>}
		</div>
	)
}
