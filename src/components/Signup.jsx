import React, {useState} from 'react';

export const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,password);
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Full Name' id='name' name='name' />

        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com' id='email' name='email' />

        <label htmlFor="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='********' id='password' name='password' />

        <button type='submit'>Sign Up</button>

      </form>
      <button onClick={() => props.onFormSwitch('login')}>Already have account? Login here</button>
    </div>
  )
}