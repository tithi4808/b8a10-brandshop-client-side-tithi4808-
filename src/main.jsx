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
import PrivateRoute from './assets/Components/Pages/Privateroute/Privateroute.jsx';
import Productdetails from './assets/Components/Pages/Home/Productdetails/Productdetails.jsx';
import Addproductdetails from './assets/Components/Pages/Addproductdetails/Addproductsdetails.jsx';
import Mycart from './assets/Components/Pages/Mycart/Mycart.jsx';
import Updatepage from './assets/Components/Pages/Updatepage/Updatepage.jsx';
import Errorpage from './assets/Components/Pages/Errorpage/Errorpage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Errorpage></Errorpage>,
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
        element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path:"brands/:name",
        element:<BrandProducts></BrandProducts>,
        loader:({params})=>fetch("http://localhost:5000/Products")
      },
      {
        path:"/addbrands",
        element:<Addbrands></Addbrands>
      },
      {
        path:"/products/:name",
        element:<PrivateRoute><Productdetails></Productdetails></PrivateRoute>,
        loader:({params})=>fetch("http://localhost:5000/details")
      },
      {
        path:"/adddetails",
        element:<Addproductdetails></Addproductdetails>
      },
      {
        path:"/cart",
        element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/cart')
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Updatepage></Updatepage></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/Products/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider><RouterProvider router={router} /></Authprovider>
  </React.StrictMode>,
)
