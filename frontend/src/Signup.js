import React, { useState} from 'react'

import axios from 'axios';

function Signup(){
    const [values, setValues] = useState({
      Name: '',
      Surname: '',
      Department: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
   
    const handleInput = (event)=>{
        setValues({...values,[event.target.name]: [event.target.value]})
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
      
        //calling api if no errors are present
        axios.post("http://localhost:8082/signup", values)
        .then(res => console.log("Successfully Registered!"))
        .catch(err => console.log(err));
    }
    return(
        < div className='d-flex justify-content-center align-items-right bg-dark vh-100 p-5'> 
        <div className='bg-white p-3 rounded w-25'>
            <h2>Check-in</h2>
            <form onSubmit={handleSubmit}>
                <div className='Entry'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type ="text" placeholder='Enter Name' name='Name'  
                    className='form-control rounded-0' onChange ={handleInput}/>
                </div>
                <div className='Entry'>
                    <label htmlFor="surname"><strong>Surname</strong></label>
                    <input type = "text" placeholder= "Enter Surname" name="Surname"  
                     className='form-control rounded-0' onChange ={handleInput}/>
                </div>
                <div className='Entry'>
                    <label htmlFor='Department'><strong>Department</strong></label>
                    <input type ="text" placeholder='Enter Department' name='Department'  
                     className='form-control rounded-0'  onChange ={handleInput}/>
                </div>
                <div className='Entry'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type ="text" placeholder='Someone@gmail.com' name='email'  
                     className='form-control rounded-0' onChange ={handleInput}/>
                </div>
                <div className='Entry'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type ="text" placeholder='Enter password' name='password'  
                    className='form-control rounded-0'  onChange ={handleInput}/>
                </div>
                <div className='Entry'>
                    <label htmlFor='confirmPassword'><strong>Confirm Password</strong></label>
                    <input type ="text" placeholder='Confirm  password' name='confirmPassword'  
                    className='form-control rounded-0'  onChange ={handleInput}/>
                </div>
                    <button type ="submit" className='btn btn-success w-100 rounde-0 ' >Completed</button>
                    <p>By selecting 'Completed', you agree to the terms and Conditions.</p>
                   
            </form>

        </div>

        
    </div>
    )
}
export default Signup//calling sign up function