import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateTicket from './pages/CreateTicket';
import { ToastContainer } from 'react-toastify';
import ProtectRoute from './components/ProtectRoute';
import Tickets from './pages/Tickets';

import Ticket from './pages/Ticket';

function App() {
  return (
    <>
      <Router>
        <div className='h-full font-body'>
          <NavBar />
          <div className="max-w-6xl m-auto ">

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />

              <Route path='/create-ticket' element={<ProtectRoute />} >
                <Route path='/create-ticket' element={<CreateTicket />} />
              </Route>

              <Route path='/tickets' element={<ProtectRoute />} >
                <Route path='/tickets' element={<Tickets />} />
              </Route>

              <Route path='/ticket/:ticketId' element={<ProtectRoute />} >
                <Route path='/ticket/:ticketId' element={<Ticket />} />
              </Route>

            </Routes>
          </div>
        </div>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
