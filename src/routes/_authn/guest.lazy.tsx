import { useEffect } from 'react'
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authn/guest')({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = useNavigate()

    useEffect(() => {
        window.sessionStorage.setItem('hydrodata_guest_access', 'true')
        navigate({ to: '/dashboard' })
    }, [navigate])

    return null
}
