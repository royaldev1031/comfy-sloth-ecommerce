import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import styled from 'styled-components'

const Button = styled.button`
  background: green;
  color: white;
`

const Container = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 8rem;
  }
`

function App() {
  return (
    <div>
      <h4>This is the first start</h4>
      <Button>Hello</Button>
      <Container>
        <div>
          <h3>Hello world</h3>
          <div className="hero">hero text</div>
        </div>
      </Container>
    </div>
  )
}

export default App
