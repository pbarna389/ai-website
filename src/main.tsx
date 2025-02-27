import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { router } from '@router'
import { queryClient } from '@services'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</StrictMode>
)
