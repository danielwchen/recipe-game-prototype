import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Recipe Game Prototype</h1>
            <Link to="/">Home</Link> | <Link to="/damagetester">Damage Tester</Link> | <Link to="/recipetester">Recipe Tester</Link>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
}