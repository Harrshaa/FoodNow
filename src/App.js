import React, {useEffect, useState} from "react";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import ReactDom from "react-dom/client";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

const App =()=>{
    return(
        <div>
        <HeaderComponent/>
        <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element: <App/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,
                    
                },   
                {
                    path:"/contact",
                    element: <Contact/>
                },
                {
                    path:"/about",
                    element: <About/>
                }

            ],
            errorElement: <Error/>

        },
   
     
    ]
)



const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);



