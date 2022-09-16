import { Navigate, Outlet } from 'react-router-dom'
import AuthStatus from '../hooks/AuthStatus'


const ProtectRoute = () => {

    const { loggedIn, checkStatus } = AuthStatus()

    if (checkStatus) {
        return (<h2>Loading ...</h2>)
    }

    return (
        loggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectRoute