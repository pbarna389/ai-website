import { MdOutlineError } from 'react-icons/md'

import type { ErrorMessageProps } from './types'

import './styles.css'

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
	return (
		<div className="error flex flex-nowrap">
			<MdOutlineError />
			<p>{text}</p>
		</div>
	)
}
