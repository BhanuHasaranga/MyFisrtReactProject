import React, {useState} from 'react'
import {Login} from '../components/Login'
import {Signup} from '../components/Signup'

export default function Register() {
        const [currentForm, setCurrentForm] = useState('login');

    const togggleForm = (forName) => {
      setCurrentForm(forName);
    }
  return (
    <div>
      {
        currentForm === "login" ? <Login onFormSwitch={togggleForm}/> : <Signup onFormSwitch={togggleForm}/>
      }
    </div>
  )
}
