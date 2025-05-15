import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// layouts
import {MainLayout} from '@layouts/index'
// Pages
import Home from '@pages/Home/Home';
import Categories from '@pages/Categories/Categories';
import Products from '@pages/Products/Products';
import AboutUs from '@pages/AboutUs/AboutUs';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';
import Error from '@pages/Error/Error';

const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    errorElement: <Error/>,
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
            path: "/categories/products/:prefix",
            element:<Products/>,
            loader: ( {params} ) => {
                if(typeof params.prefix !== "string" || 
                    !/^[a-z]+$/i.test(params.prefix)
                ){
                    throw new Response("Bad Request", {
                        statusText:'Category is not found',
                        status:404,
                    })
                }
                return true;
            }
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
