import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
        <Container>
            <Header headerTitle={ `I'd love to talk! Email me at the address below` } />
            <p>
                <a href="mailto:me@example.com">me@example.com</a>
            </p>
        </Container>
    </Layout>
  )
}