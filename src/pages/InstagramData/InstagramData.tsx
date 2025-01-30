import { InstaPictures } from './components'

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
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			{instaData?.map(({ thumbnail_url, media_url, id }, idx) => (
				<InstaPictures
					key={id}
					url={thumbnail_url ? thumbnail_url : media_url}
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
