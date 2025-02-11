import { InstaContent } from './components'

import { useGetInfiniteScrollData } from '@hooks'

import type { InstaContentModel, InstaModel } from '@types'

import './styles.css'

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
		<div className="page">
			<div className="instagram flex flex-center">
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
			</div>
			{isFetching && <div>FETCH NEW DATA</div>}
		</div>
	)
}
