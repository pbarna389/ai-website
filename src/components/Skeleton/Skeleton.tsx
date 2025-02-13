import type { SkeletonProps } from './types'

import './styles.css'

export const Skeleton = ({ amount, classNames }: SkeletonProps) => {
	const skeletonCount = Array.from({ length: amount }, (_, i) => `${classNames}-skeleton-${i + 1}`)

	return skeletonCount.map((el) => <div key={el} className={`skeleton ${classNames}`} />)
}
