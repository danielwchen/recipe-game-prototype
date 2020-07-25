import React, { Component } from 'react'
import Spinner from '../../components/Spinner'

export default class StatManager extends Component {
    containerStyle = () => {
        return {
            borderWidth: 3,
            borderColor: 'blue',
            borderStyle: 'solid',
            borderRadius: 20,
            padding: 10,
            textAlign: 'center',
            display: 'flex',
            height: '100%',
            // userSelect: 'none',
            backgroundColor: 'lightblue',
            justifyContent: 'center',
        }
    }

    render() {
        return (
            <div className="component-manager" style={this.containerStyle()}>
                <div id="attackOptions" width="100%">
                    <button type="button">Attack</button>
                    <input type="checkbox"/>Auto Attack
                    <button type="button">Reset</button>
                </div>
                <div id="attackBase" className="stat-group">
                    <h3>Base Attack</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="10" name='Attack Damage (hp)' onChange={null}/>
                    <Spinner minValue="1" maxValue="10" defaultValue="1" name='Attack Speed (a/s)' onChange={null}/>
                </div>
                <div id="attackEffects" className="stat-group">
                    <h3>Attack Effects</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Damage Over Time (hp/s)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Vulnerable (% extra)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Crit Chance (%)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Crit Damage (% extra)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Execute (% threshold)' onChange={null}/>
                </div>
                <div id="targetStats" className="stat-group">
                    <h3>Enemy Stats</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Health (hp)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Regen (hp/s)' onChange={null}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" name='Regen Delay (s)' onChange={null}/>
                </div>
                
            </div>
        )
    }
}
