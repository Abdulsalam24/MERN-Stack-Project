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


function App() {
  return (
    <>
      <Router>
        <div className="container m-auto font-body">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/create-ticket' element={<ProtectRoute />} >
              <Route path='/create-ticket' element={<CreateTicket />} />
            </Route>
            <Route path='/tickets' element={<Tickets />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
