import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { handler } from 'daisyui';
import { Link } from 'react-router-dom';

const Employeelist = () => {

    const [employee, setEmployee] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
             const employeeLoaded=data.data;
             setEmployee(employeeLoaded);
     });
    },[])
    return (
        <div>
        <h2 className='text-3xl text-center m-5'>Employee List</h2>
        <div className="overflow-x-auto">
<table
 className="table w-9/12 mx-auto">
<thead>
  <tr>
    <th>Employee Name</th>
    <th>Details</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
                        {  employee &&
                            employee.map((singleEmployee) =>
                             <tr>
                                <td>{singleEmployee.name}</td>
                                <td><Link to={`/singleEmployee/${singleEmployee.id}`}>
                                        <button className='btn btn-sm btn-warning'>Details</button></Link></td>
                                <td><button className='btn btn-sm btn-primary'>Block</button></td>
                                <td><button className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
 

 
</tbody>
</table>
</div>

    </div>
    );
};

export default Employeelist;