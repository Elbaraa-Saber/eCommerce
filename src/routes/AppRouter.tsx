import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// layouts
import {MainLayout} from '@layouts/index'
// Pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path:"categories",
            element: <Categories/>
        },
        {
            path: "products/:prefix",
            element:<Products/>,
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
        {
            path: "about-us",
            element: <AboutUs/>
        },
    ]
}])
function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter
