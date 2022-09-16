import { Navigate, Outlet } from 'react-router-dom'
import AuthStatus from '../hooks/AuthStatus'
import Spinner from './Spinner'


const ProtectRoute = () => {

    const { loggedIn, checkStatus } = AuthStatus()

    if (checkStatus) {
        return <Spinner />
    }

    return (
        loggedIn ? <Outlet /> : <Navigate to='/login' />
    )
}

export default ProtectRoute