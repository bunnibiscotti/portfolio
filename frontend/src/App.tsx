import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState<string>("Home")
  const name: string = "Gavin W."

  const Header = () => {
    return (
      <>
        <header>
          <h1>{ name }</h1>
          <nav>
            <ul>
              <li><button onClick={() => setPage("Home") }>Home</button></li>
              <li><button onClick={() => setPage("Projects")}>Projects</button></li>
            </ul>
          </nav>
        </header>
      </>
    )
  }

  return (
    <>
      <Header/>
      <Container>
          { page === "Home" ? <Home /> : null}
          { page === "Projects" ? <Projects /> : null}
      </Container>
      <Footer />
    </>
  )
}

export default App
