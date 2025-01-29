import { VideoPlayer } from './components'

import { useGetInfiniteScrollData } from '@hooks'

import type { ContentModel, YoutubeModel } from '@types'

export const YoutubeVideos = () => {
	const { data, error, hasNextPage, fetchNextPage, isFetching } =
		useGetInfiniteScrollData<YoutubeModel>('youtubeData')

	const { pages } = data ? data : {}

	if (error && !data?.pages) {
		return <p>Something went down the shitter, please try again later!</p>
	}

	const shownData = pages?.reduce((arr: ContentModel[], curr) => {
		const videoItems = [...curr.items.map((el) => el.contentDetails)]

		arr.push(...videoItems)

		return arr
	}, [])

	return (
		<div>
			{shownData?.map(
				({ videoId, videoPublishedAt }, idx) =>
					videoPublishedAt &&
					videoId && (
						<VideoPlayer
							videoPublishedAt={videoPublishedAt}
							currVideosAmount={shownData.length}
							fetchNextPage={fetchNextPage}
							key={videoId}
							link={videoId}
							idx={idx}
							isFetching={isFetching}
							hasNextPage={hasNextPage}
						/>
					)
			)}
			{isFetching && <div>FETCH NEW DATA</div>}
		</div>
	)
}
