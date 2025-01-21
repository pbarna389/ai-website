import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { queryClient } from '@services'

import { QueryClientProvider } from '@tanstack/react-query'

import { App } from 'App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>
)
