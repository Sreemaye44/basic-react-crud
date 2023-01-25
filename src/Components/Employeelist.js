import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { handler } from 'daisyui';
import { Link } from 'react-router-dom';

const Employeelist = () => {

    const [employee, setEmployee] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
             const employeeLoaded=data.data;
             setEmployee(employeeLoaded);
     });
    }, [])
    const handleBlock = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res);
            setIsBlocked(!isBlocked);
        })
        
    };
    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res);
            alert('deleted successfully')
           
        })
    }
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
                                    <td><button className='btn btn-sm btn-primary' onClick={()=>handleBlock(singleEmployee.id)}>
      {isBlocked ? 'Unblock' : 'Block'}</button></td>
                                    <td><button onClick={()=>handleDelete(singleEmployee.id) } className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
 

 
</tbody>
</table>
</div>

    </div>
    );
};

export default Employeelist;