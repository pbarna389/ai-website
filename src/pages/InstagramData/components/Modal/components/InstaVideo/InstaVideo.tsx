import type { InstaVideoProps } from './types'

export const InstaVideo = ({ data }: InstaVideoProps) => {
	return (
		<video className="instaContent" controls poster={data.thumbnail_url}>
			<source src={data.media_url} type="video/mp4" />
		</video>
	)
}
