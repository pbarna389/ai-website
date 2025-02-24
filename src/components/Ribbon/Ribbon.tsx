import type { RibbonProps } from './types'

import './styles.css'

export const Ribbon = ({ text }: RibbonProps) => {
	return <div className="ribbon">{text}</div>
}
