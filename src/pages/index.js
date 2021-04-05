import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
      <div style={{ color: `purple` }}>
        <Link to="/about/">About</Link>
        <Link to="/about-css-modules/">About css modules</Link>

        <Header headerTitle="Hello Bikatti! Again" />
        <p>What a world</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    )
}
