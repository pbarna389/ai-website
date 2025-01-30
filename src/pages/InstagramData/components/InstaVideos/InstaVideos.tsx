import type { InstaVideoProps } from './types'

export const InstaVideos = ({ link }: InstaVideoProps) => {
	return (
		<div>
			<video controls width="500" height="360">
				<source src={link} type="video/mp4" />
				InstaVideos
			</video>
		</div>
	)
}
