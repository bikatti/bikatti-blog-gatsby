import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Header from "../components/header"
import Container from "../components/container"


const ImgHero = styled.img`
  width: 100%;
  margin-bottom: 30px;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
  border-radius: 50%;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default function Home() {
  return (
      <Container>
        <div style={{ color: `purple` }}>
          <Link to="/about/">About</Link>
          <Link to="/about-css-modules/">About css modules</Link>

          <Header headerTitle="Hello Bikatti! Again" />
          <p>What a world</p>
          <ImgHero src="https://source.unsplash.com/random/400x200" alt="" />

          <User
            username="Jane Doe"
            avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <User
            username="Bob Smith"
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>
      </Container>
    )
}
