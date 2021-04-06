import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Container from './container'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />

      <Container>
        <Link to="/">
          <h3>Bikatti site</h3>
        </Link>
        <Link to="/about/">About</Link>
        <Link to="/about-css-modules/">About css modules</Link>
        <Link to="/contact/">Contact</Link>
      </Container>

      {children}
    </React.Fragment>
  )
}