import React, {useState} from 'react'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);
    }
  return (
    <div>
      <div className='d-flex flex-column w-25 m-auto'>
        <div className="mx-auto">
          <h1>Login</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className='form-group row'>
            <label htmlFor="email" className='col-1 col-form-label'>Email</label>
            <input className='form-control m-2' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />

            <label htmlFor="password" className='col-1 col-form-label'>Password</label>
            <input className='form-control m-2' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password' name='password' />
          </div>


          <button className='btn btn-primary mb-2' type='submit'>Log In</button>

        </form>
        <button className='btn btn-link m-4' onClick={() => props.onFormSwitch('register')}>Don't have account? Register here</button>
      </div>
    </div>
  )
}
