import Link from "next/link"

const Home = () => {
  return (
    <body>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-t-50 p-b-90">
            {/* Form Login*/}
            <form class="login100-form validate-form flex-sb flex-w">
              <span class="login100-form-title p-b-51">Login</span>
              {/* Falta lo de validate   Login Username*/}
              <div class="wrap-input100 validate-input m-b-16">
                <input class="input100" type="text" name="username" placeholder="Username"/>
                <span class="focus-input100"></span>
              </div>
              {/* Falta lo de validate    Contraseña*/}
              <div class="wrap-input100 valite-input m-b-16">
                <input class="input100" type="password" name="pass" placeholder="Password"/>
                <span class="focus-input100"></span>
              </div>
              {/* Remember me  Forgot password*/}
              <div class="flex-sb-m w-full p-t-3 p-b-24">
                {/* Remember me  */}
                <div class="contact100-form-checkbox">
                  {/* falta un input id=""*/}
                  <label class="label-checkbox" htmlFor="ckb1">
                    Recuerdame
                  </label>
                </div>
                {/* Forgot password*/}
                <div>
                  <a class="txt1" href="#">¿Olvidaste tu contraseña?</a>
                </div>
              </div>
            {/* Login Button*/}
            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">
                Login
              </button>
            </div>

            {/* Register Button*/}
            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn">
                Registrar
              </button>
            </div>

            </form>
          </div>
        </div>
      <h1>Hola</h1>
      <Link href='/login'>Login</Link>
    </div>
    </body>
    
  )
}

export default Home