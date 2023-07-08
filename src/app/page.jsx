import Link from "next/link"
import Image from "next/image"

import "@/styles/indexStyle.css"
import img1 from "@/images/porteria.png"

const Home = () => {
  return (
    <div>
      <div className="part-1">
        <div className="container">
          <h1>Imagina un lugar...</h1>
          <p>
            ... en donde puedas formar parte de un club escolar, 
            un grupo de jugadores o una comunidad mundial de arte. 
            En el que puedas pasar tiempo con unos cuantos amigos. 
            Un lugar que haga que hablar a diario y divertirte más a menudo sea fácil.
          </p>
          <div className="buttons">
            <Link href={'/login'} className="button"><h4>Hola</h4></Link>
            <Link href={'/login'} className="button">Hola</Link>
          </div>
        </div>
      </div>
      <div className="part-2">
        <h2>Parte 2</h2>
      </div>
      <div className="part-3">
        <h2>Parte 3</h2>
      </div>
      <div className="part-4">
        <h2>Parte 4</h2>
      </div>
      <div className="part-5">
        <h2>Parte 5</h2>
      </div>
    </div>
  )
}

export default Home
