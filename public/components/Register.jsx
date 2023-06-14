"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import '../styles/page.css';

const strengthLabels = ["weak", "medium", "strong"];
const baseURL = 'http://127.0.0.1:8000/api/auth/'

const Register = () => {
  const [strength, setStrength] = useState("");
  const [form, setForm] = useState({'name':'', 'last_name':'', 'email':'', 'password':''})

  const getStrength = (password) => {

    let strengthIndicator = -1;

    let upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      let char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }

    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChangeForm = (event) => {

    const {name, value} = event.target
    if(name === 'password'){
      getStrength(value)
    }
    setForm((prevForm) => ({...prevForm, [name]:value}))

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`The name you entered was: ${JSON.stringify(form)}`)
    console.log(form)

    const options ={
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(baseURL, options)
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))

  }

  return (
    <div className='slide-bottom'>
      <div className={`login-card`}>
        {/* <Image src={logo} alt='logo'/> */}
        <h2>Sign Up</h2>
        <form className="login-form" onSubmit={handleSubmit}>

          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            placeholder="Name"
            name='name'
            onChange={handleChangeForm}
            value={form.name}
          />
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            placeholder="Last Name"
            name='last_name'
            onChange={handleChangeForm}
            value={form.last_name}
          />
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
            name='email'
            onChange={handleChangeForm}
            value={form.email}
          />
          <input
            spellCheck="false"
            className="control"
            type="password"
            placeholder="Password"
            onChange={handleChangeForm}
            name="password"
            value={form.password}
          />

          <div className={`bars ${strength}`}>
            <div></div>
          </div>
          <div className="strength">{strength && <>{strength} password</>}</div>
          <button className="control" type="submit">
            JOIN NOW
          </button>
          <p>I have an account</p>
        </form>
      </div>
    </div>
  )
}

export default Register
