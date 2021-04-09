import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"


import Container from './container'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />

      <Container>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}   site</h3>
        </Link>
        <Link to="/about/">About</Link>
        <Link to="/about-css-modules/">About css modules</Link>
        <Link to="/contact/">Contact</Link>
      </Container>

      {children}
    </React.Fragment>
  )
}