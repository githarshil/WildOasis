import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import { Routes, BrowserRouter, Route, NavLink, Navigate } from 'react-router-dom';
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Settings from './pages/Settings';
import Users from './pages/Users';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 0,
            }
        }
    })
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyles />
                <BrowserRouter>

                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route index element={<Navigate replace to="dashboard" />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/bookings" element={<Bookings />} />
                            <Route path="/cabins" element={<Cabins />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/users" element={<Users />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider >
        </>
    )
}

export default App
