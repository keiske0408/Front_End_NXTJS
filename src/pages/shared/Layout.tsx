import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
    ThemeProvider,
    CssBaseline,
    useTheme
} from '@mui/material'

const queryClient = new QueryClient({
    defaultOptions : {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        }
    }
});

interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ 
    children 
}) => { 
    const theme = useTheme();
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Layout;