import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'


function Tickets() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTickets())
      console.log('first')
    }, [dispatch])
    
    
  return (
    <div>Tickets</div>
  )
}

export default Tickets