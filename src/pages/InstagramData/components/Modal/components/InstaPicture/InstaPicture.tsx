import type { InstaPictureProps } from './types'

export const InstaPicture = ({ data }: InstaPictureProps) => {
	return <img className="instaContent" src={data.media_url} />
}
