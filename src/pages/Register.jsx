import React, {useState} from 'react'
import Header from '../components/Header';
import {Login} from '../components/Login';
import {Signup} from '../components/Signup'

export default function Register() {
        const [currentForm, setCurrentForm] = useState('login');

    const togggleForm = (forName) => {
      setCurrentForm(forName);
    }
  return (
    <div>
        <Header/>
      {
        currentForm === "login" ? <Login onFormSwitch={togggleForm}/> : <Signup onFormSwitch={togggleForm}/>
      }
    </div>
  )
}
