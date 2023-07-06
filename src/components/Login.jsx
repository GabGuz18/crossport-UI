import React from 'react'
import '../styles/loginStyles.css'

export const Login = () => {
  return (
    
    <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
            {/* Form Login*/}
            <form className="login100-form validate-form flex-sb flex-w">
            <img className="image" src="../images/crossport_logo.png"/>
              <span className="login100-form-title p-b-51">Login</span>
              {/* Falta lo de validate   Login Username*/}
              <div className="wrap-input100 validate-input m-b-16">
                <input className="input100" type="text" name="username" placeholder="Username"/>
                <span className="focus-input100"></span>
              </div>
              {/* Falta lo de validate    Contraseña*/}
              <div className="wrap-input100 valite-input m-b-16">
                <input className="input100" type="password" name="pass" placeholder="Password"/>
                <span className="focus-input100"></span>
              </div>
              {/* Remember me  Forgot password*/}
              <div className="flex-sb-m w-full p-t-3 p-b-24">
                {/* Remember me  */}
                <div className="contact100-form-checkbox">
                  {/* falta un input id=""*/}
                  <label className="label-checkbox" htmlFor="ckb1">
                    Recuerdame
                  </label>
                </div>
                {/* Forgot password*/}
                <div>
                  <a className="txt1" href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
            {/* Login Button*/}
            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">
                Login
              </button>
            </div>

            {/* Register Button*/}
            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">
                Registrar
              </button>
            </div>

            </form>
          </div>
        </div>
    </div>
  )
}
