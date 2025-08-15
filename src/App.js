import React, {useEffect, useState,lazy, Suspense,useContext} from "react";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from './components/About';
import ReactDom from "react-dom/client";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=>{

    return import ("./components/Grocery");
})
const App =()=>{
    const [userName, setUserName]= useState();
    useEffect(()=>{
        const data= {
            name: "Harrshaa"
        };
        setUserName(data.name);

    },[])
    return(
        <div>
        <UserContext.Provider value={{loggedInUser: "Harsha", setUserName}}>
        <HeaderComponent/>
        </UserContext.Provider>
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
                },
                {
                    path:"/restaurants/:resId",
                    element: <RestaurantMenu/>

                },
                {
                    path:"/grocery",
                    element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery/></Suspense>
                }


            ],
            errorElement: <Error/>

        },
   
     
    ]
)



const root= ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);



