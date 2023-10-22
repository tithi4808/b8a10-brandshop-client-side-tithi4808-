
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './assets/Components/Pages/Home/Navbar/Navbar'
import Footer from './assets/Components/Pages/Home/Footer/Footer'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
