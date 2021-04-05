import React from "react"

export default function Header( props ) {
    const { headerTitle } = props

    return <h1>{ headerTitle }</h1>
}