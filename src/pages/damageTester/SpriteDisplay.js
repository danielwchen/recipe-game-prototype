import React, { Component } from 'react'
import './SpriteDisplay.css'

export default class SpriteDisplay extends Component {
    render() {
        return (
            <div className="component-display">
                <div><img src={'https://via.placeholder.com/560x100?text=IMAGE'} alt="temporary placeholder"/></div>
                <div>This is where the sprites go</div>
            </div>
        )
    }
}
