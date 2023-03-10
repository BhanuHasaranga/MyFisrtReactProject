import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    // const userData = { email, password };
    // console.log(userData);

    // fetch('http://your-backend-api.com/login', {
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
    <div>
      <div className="d-flex flex-column w-25 m-auto">
        <div className="mx-auto">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="email" className="col-1 col-form-label">
              Email
            </label>
            <input
              className="form-control m-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />

            <label htmlFor="password" className="col-1 col-form-label">
              Password
            </label>
            <input
              className="form-control m-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>

          <Link to="/">
            <button className="btn btn-primary mb-2" type="submit">
              Log in
            </button>
          </Link>
        </form>
        <button
          className="btn btn-link m-4"
          onClick={() => onFormSwitch('register')}
        >
          Don't have an account? Register here
        </button>
      </div>
    </div>
  );
};
