import { createBrowserRouter } from "react-router-dom";
import CreateEmployee from "../CreateEmployee";
import EmployeeDetails from "../EmployeeDetails";
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
            {
                path: '/singleEmployee/:employeeId',
                loader: async ({params}) => {
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.employeeId}`)
                },
              element:<EmployeeDetails></EmployeeDetails>
            },
        ]
    }
])
export default router;