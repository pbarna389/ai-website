import { InstaPictures, InstaVideos } from './components'

import { useGetInfiniteScrollData } from '@hooks'

import type { InstaContentModel, InstaModel } from '@types'

export const InstagramData = () => {
	const { data, error, isFetching } = useGetInfiniteScrollData<InstaModel>('pictures')

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
		<div>
			{instaData?.map(({ media_type, media_url, id }) =>
				media_type === 'VIDEO' ? <InstaVideos key={id} link={media_url} /> : <InstaPictures key={id} />
			)}
			{isFetching && <div>FETCH NEW DATA</div>}
		</div>
	)
}
