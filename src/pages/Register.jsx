import React from 'react'
import {Login} from './Login'
import {Register} from './Signup'

export default function Register() {
        const [currentForm, setCurrentForm] = useState('login');

    const togggleForm = (forName) => {
      setCurrentForm(forName);
    }
  return (
    <div>
      {
        currentForm === "login" ? <Login onFormSwitch={togggleForm}/> : <Register onFormSwitch={togggleForm}/>
      }
    </div>
  )
}
