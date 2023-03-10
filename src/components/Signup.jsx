import React, {useState} from 'react'
import {Link} from "react-router-dom"

export const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
      event.preventDefault()
        console.log(name,email,password)

        // const userData = { name, email, password };
        // console.log(userData);
    
        // fetch('http://your-backend-api.com/signup', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(userData),
        // })
        //   .then((response) => response.json())
        //   .then((data) => console.log(data))
        //   .catch((error) => console.error(error))
    }
  return (
    <div className='d-flex flex-column w-25 m-auto'>
            <div className="mx-auto">
              <h1>Signup</h1>
            </div>
      <form action="" onSubmit={handleSubmit}>
        <div className='form-group row'>
          <label htmlFor="name" className='col-3 col-form-label'>Full Name</label>
          <input className='form-control m-2' value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder='Full Name' id='name' name='name' />

          <label htmlFor="email" className='col-1 col-form-label'>email</label>
          <input className='form-control m-2' value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />

          <label htmlFor="password" className='col-1 col-form-label'>password</label>
          <input className='form-control m-2' value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder='********' id='password' name='password' />
        </div>
        <Link to="/">
          <button className="btn btn-primary mb-2" type="submit">
            Sign up
          </button>
        </Link>

      </form>
      <button className='btn btn-link m-4' onClick={() => props.onFormSwitch('login')}>Already have account? Login here</button>
    </div>
  )
}