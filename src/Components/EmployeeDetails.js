import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLoaderData, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const EmployeeDetails = () => {
    const employee = useLoaderData();
    console.log(employee);
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const form=event.target;
        const name =form.name.value;
        const email =form.email.value;
        const number = form.number.value;
        const employeeInfo = {
            
            name,
            email,
            number

        }
        axios.post("https://jsonplaceholder.typicode.com/users", employeeInfo)
            .then(res => {
                console.log(res);
                alert('information updated')
            })
            .catch((error) => {
                console.log(error);
        })
       
    }
    return (
        <div className='p-10 bg-slate-200'>
        <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
        <h1 className='text-3xl font-semibold text-teal-600'>Update Employee</h1>
          <input type="text" name="name" placeholder="name" defaultValue={employee.name} className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" required />
          <input type="email" name="email" placeholder="email" defaultValue={employee.email} className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" readOnly />
          <input type="text" name="number" placeholder="Phone number" defaultValue={employee.address.zipcode} className="input input-bordered input-warning w-full max-w-xs my-3" required/><br/>
          <input type="submit" className='btn bg-teal-600 text-white' value="Save" />
          
      </form>
      </div>
    );
};

export default EmployeeDetails;