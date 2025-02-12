import { VideoPlayer } from './components'

import { useGetInfiniteScrollData } from '@hooks'

import type { YoutubeModel, YTContentModel } from '@types'

export const YoutubeVideos = () => {
	const { data, error, hasNextPage, fetchNextPage, isFetching } =
		useGetInfiniteScrollData<YoutubeModel>('videos')

	const { pages } = data ? data : {}

	if (error && !data?.pages) {
		return <p>Something went down the shitter, please try again later!</p>
	}

	const shownData = pages?.reduce((arr: YTContentModel[], curr) => {
		const videoItems = [...curr.items.map((el) => el.contentDetails)]

		arr.push(...videoItems)

		return arr
	}, [])

	return (
		<div className="page">
			<div className="main-content youtube flex .flex-column">
				{shownData?.map(
					({ videoId, videoPublishedAt }, idx) =>
						videoPublishedAt &&
						videoId && (
							<VideoPlayer
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
		</div>
	)
}
