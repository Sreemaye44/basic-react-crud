import axios from 'axios';
import React, { useEffect, useState } from 'react';


const CreateEmployee = () => {

    const handleAddService = async(event) => {
        event.preventDefault();
        const form=event.target;
        const firstName =form.firstName.value;
        const lastName =form.lastName.value;
        const email =form.email.value;
        const number = form.number.value;
        const employeeInfo = {
            firstName,
            lastName,
            email,
            number

        }
        axios.post("https://jsonplaceholder.typicode.com/posts", employeeInfo)
            .then(res => {
                console.log(res);
                event.target.reset();
            })
            .catch((error) => {
                console.log(error);
        })
       
    }
    return (
        <div className='p-10 bg-slate-200'>
        <form onSubmit={handleAddService} className='w-3/4 mx-auto'>
        <h1 className='text-3xl font-semibold text-teal-600'>Add an Employee</h1>
          <input type="text" name="firstName" placeholder="First Name" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" required />
          <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" required /><br/>
          <input type="email" name="email" placeholder="email" className="input input-bordered input-warning w-full max-w-xs my-3 mr-5" />
          <input type="number" name="number" placeholder="Phone number" className="input input-bordered input-warning w-full max-w-xs my-3" required/><br/>
          <input type="submit" className='btn bg-teal-600 text-white' value="ADD" />
          
      </form>
      </div>
    );
};

export default CreateEmployee;