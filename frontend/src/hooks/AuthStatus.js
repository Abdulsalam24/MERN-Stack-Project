import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function AuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkStatus, setCheckStatus] = useState(true)

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckStatus(false)
    }, [user])


    return { loggedIn, checkStatus }
}

export default AuthStatus