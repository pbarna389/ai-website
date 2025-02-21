import type { InstaVideoProps } from './types'

import './styles.css'

export const InstaVideo = ({ link }: InstaVideoProps) => {
	return (
		<video key={link} controls autoPlay>
			<source src={link} type="video/mp4" />
		</video>
	)
}
