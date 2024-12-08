import { createBrowserRouter } from "react-router-dom";
import MainUser from "./User/MainUser/MainUser";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainUser />
        
    },
]);

