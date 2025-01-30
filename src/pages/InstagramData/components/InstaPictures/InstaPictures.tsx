type InstaPicturesProps = {
	url: string
}

export const InstaPictures = ({ url }: InstaPicturesProps) => {
	return <img src={url} style={{ width: '500px', height: '360px' }} />
}
