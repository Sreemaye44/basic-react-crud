import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../CreateEmployee";
import Employeelist from "../Employeelist";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
      path: '/',
        element: <Main></Main>,
        children: [
            {
              path:'/',
              element:<CreateEmployee></CreateEmployee>,
            },
            {
              path:'/list',
              element:<Employeelist></Employeelist>,
            },
        ]
    }
])
export default router;