import { VideoThumbnail } from './components'

import { ErrorMessage, Skeleton } from '@components'
import { errorMessages } from '@constants'
import { useGetInfiniteScrollData } from '@hooks'

import type { YoutubeModel } from '@types'

import type { YTMergedObject } from './types'

export const YoutubeVideos = () => {
	const { data, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
		useGetInfiniteScrollData<YoutubeModel>('videos')

	const { pages } = data ? data : {}

	if (error && !pages) {
		return (
			<div className="page">
				<div className="main-content flex .flex-column">
					<ErrorMessage text={errorMessages.youtube} />
				</div>
			</div>
		)
	}

	const shownData = pages?.reduce((arr: YTMergedObject[], curr) => {
		const videoItems = [
			...curr.items.map((el) => {
				return {
					...el.contentDetails,
					thumbnails: el.snippet.thumbnails,
					title: el.snippet.title
				}
			})
		]

		arr.push(...videoItems)

		return arr
	}, [])

	return (
		<div className="page">
			<div className="main-content youtube flex">
				{isFetching && !pages && <Skeleton amount={5} classNames="youtube" />}
				{shownData?.map(
					({ videoId, videoPublishedAt, thumbnails }, idx) =>
						videoPublishedAt &&
						videoId && (
							<VideoThumbnail
								currVideosAmount={shownData.length}
								fetchNextPage={fetchNextPage}
								key={videoId}
								link={videoId}
								idx={idx}
								isFetching={isFetchingNextPage}
								hasNextPage={hasNextPage}
								thumbnails={thumbnails}
							/>
						)
				)}
				{isFetchingNextPage && <Skeleton amount={5} classNames="youtube" />}
				{error && <ErrorMessage text={errorMessages.youtube} />}
			</div>
		</div>
	)
}
