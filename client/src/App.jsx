import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import ListShows from './pages/Admin/ListShows'
import AddShows from './pages/Admin/AddShows'
import ListBookings from './pages/Admin/ListBookings'
const App = () => {
  const isAdmin = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster/> {/*so now we can use toast in any component*/}
      {!isAdmin && <Navbar/>}
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
        <Route path="/favourite" element={<Favourite/>}/>

        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>
      </Routes>
      {!isAdmin && <Footer/>}
    </>
  )
}

export default App
