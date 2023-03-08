import React, {useState} from 'react';
import { Link } from "react-router-dom"

export const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,password);
    }
  return (
    <div className='d-flex flex-column w-25 m-auto'>
            <div className="mx-auto">
              <h1>Signup</h1>
            </div>
      <form action="" onSubmit={handleSubmit}>
        <div className='form-group row'>
          <label htmlFor="name" className='col-3 col-form-label'>Full Name</label>
          <input className='form-control m-2' value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Full Name' id='name' name='name' />

          <label htmlFor="email" className='col-1 col-form-label'>email</label>
          <input className='form-control m-2' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />

          <label htmlFor="password" className='col-1 col-form-label'>password</label>
          <input className='form-control m-2' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password' name='password' />
        </div>
        <button className='btn btn-light mb-2' type='submit'>
          <Link to="/">
            Sign Up
          </Link>
        </button>

      </form>
      <button className='btn btn-link m-4' onClick={() => props.onFormSwitch('login')}>Already have account? Login here</button>
    </div>
  )
}