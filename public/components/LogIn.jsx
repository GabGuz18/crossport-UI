"use client"
import { useState } from 'react';
import axios from 'axios';

import styles from '../styles/page.css';
import logo from '../assets/logo.svg'

const baseURL = 'http://127.0.0.1:8000/api/auth/login/'

const LogIn = () => {
  const [form, setForm] = useState({'email':'', 'password':''})

  const handleChangeForm = (event) => {
    const {name, value} = event.target
    setForm((prevForm) => ({...prevForm, [name]:value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`The name you entered was: ${JSON.stringify(form)}`)
    console.log(form)

    const options = {
      method: 'POST',
      body: JSON.stringify(form),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch(baseURL, options)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        console.log(response.token)
        localStorage.setItem('token',response.token)
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='slide-bottom'>

      <div className={`login-card`}>
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username">
            <input
              autoComplete="off"
              spellCheck="false"
              className="control"
              type="email"
              placeholder="Email"
              name='email'
              value={form.email}
              onChange={handleChangeForm}
            />
          </div>
          <input
            name="password"
            spellCheck="false"
            className="control"
            type="password"
            placeholder="Password"
            onChange={handleChangeForm}
            value={form.password}
          />
          <button className="control" type="submit">
            JOIN NOW
          </button>
          <p>I don't have an account</p>
        </form>
      </div>
    </div>
  )
}

export default LogIn