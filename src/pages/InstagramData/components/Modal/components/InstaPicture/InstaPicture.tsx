import type { InstaPictureProps } from './types'

export const InstaPicture = ({ data }: InstaPictureProps) => {
	return <img src={data.media_url} />
}
