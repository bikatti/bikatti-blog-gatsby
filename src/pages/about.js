import React from "react"

import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Container>
        <div style={{ color: `teal` }}>
            <Header headerTitle="About Gatsby" />
            <Header headerTitle="It's pretty cool" />
            <p>Such wow. Very React.</p>
        </div>
      </Container>
  </Layout>
  )
}