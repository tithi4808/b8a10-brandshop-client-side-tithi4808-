import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Components/Pages/Home/Home.jsx';
import Authprovider from './assets/Components/Authprovider/Authprovider.jsx';
import Login from './assets/Components/Pages/Login/Login.jsx';
import Register from './assets/Components/Pages/Register/Register.jsx';
import AddProducts from './assets/Components/Pages/Addproduct/Addproduct.jsx';
import Nestle from './assets/Components/Pages/BrandProducts/Brandproducts.jsx';
import Addbrands from './assets/Components/AddBrands/Addbrands.jsx';
import BrandProducts from './assets/Components/Pages/BrandProducts/Brandproducts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/addproducts",
        element:<AddProducts></AddProducts>
      },
      {
        path:"brands/:name",
        element:<BrandProducts></BrandProducts>,
        loader:({params})=>fetch("http://localhost:5000/Products")
      },
      {
        path:"/addbrands",
        element:<Addbrands></Addbrands>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
