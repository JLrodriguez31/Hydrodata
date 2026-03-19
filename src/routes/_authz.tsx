import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { supabase } from '@/services/supabaseService'
import ThemeProvider from '@/context/ThemeProvider'
import MainAuthz from '@/layouts/authz/Main'
import { SidebarProvider } from '@/components/ui/base/sidebar'
import Aside from '@/layouts/authz/Aside'

export const Route = createFileRoute('/_authz')({
    beforeLoad: async () => {
        const { data } = await supabase.auth.getSession()

        const hasGuestAccess =
            typeof window !== 'undefined' &&
            window.sessionStorage.getItem('hydrodata_guest_access') === 'true'

        if (hasGuestAccess) {
            return
        }

        if (!data.session) {
            throw redirect({ to: '/' })
        }
    },
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <Aside />
                <MainAuthz>
                    <Outlet />
                </MainAuthz>
            </SidebarProvider>
        </ThemeProvider>
    )
}
