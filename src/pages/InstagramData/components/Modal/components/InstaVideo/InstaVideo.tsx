import type { InstaVideoProps } from './types'

export const InstaVideo = ({ data }: InstaVideoProps) => {
	return (
		<video width="100%" height="100%" controls autoPlay poster={data.thumbnail_url}>
			<source src={data.media_url} type="video/mp4" />
		</video>
	)
}
