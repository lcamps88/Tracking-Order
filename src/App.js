import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Tacking from './components/Tracking/Tracking'

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Tacking/>}></Route>
          </Routes>
        </Container>
      </main>
    </div>
  )
}

export default App
