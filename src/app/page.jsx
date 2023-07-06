import Link from "next/link"

const Home = () => {
  return (
    <div>
      <h1>Hola</h1>
      <Link href={"/Login"}>
        Login1
      </Link>
    </div>
  )
}

export default Home
