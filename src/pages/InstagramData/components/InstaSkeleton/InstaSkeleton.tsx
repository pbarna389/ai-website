import './styles.css'

export const InstaSkeleton = () => {
	const skeletonCount = Array.from({ length: 3 }, (_, i) => `insta-skel-${i + 1}`)

	return skeletonCount.map((el) => <div key={el} className="insta-skeleton" />)
}
