import React, { Component } from 'react'
import Spinner from '../../components/Spinner'
import './StatManager.css'

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
            // alignItems: 'center',
            flexFlow: 'row wrap'
        }
    }

    render() {
        const {onChange} = this.props;

        return (
            <div className="component-manager" style={this.containerStyle()}>
                <div id="attackOptions" className="attack-group">
                    {/* <button type="button">Attack</button> */}
                    <input type="checkbox"/>Attack
                    {/* <button type="button">Reset</button> */}
                </div>
                <div id="attackBase" className="stat-group">
                    <h3>Base Attack</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="10" label='Attack Damage (hp)' statName='attackDamage' onChange={onChange}/>
                    <Spinner minValue="1" maxValue="10" defaultValue="1" label='Attack Speed (a/s)' statName='attackSpeed' onChange={onChange}/>
                </div>
                <div id="attackEffects" className="stat-group">
                    <h3>Attack Effects</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="0" label='Damage Over Time (hp/s)' statName='damageOverTime' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="0" label='Vulnerable (% extra)' statName='vulnerableValue' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="0" label='Crit Chance (%)' statName='critChance' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="50" label='Crit Damage (% extra)' statName='critValue' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="0" label='Execute (% threshold)' statName='executeValue' onChange={onChange}/>
                </div>
                <div id="targetStats" className="stat-group">
                    <h3>Enemy Stats</h3>
                    <Spinner minValue="0" maxValue="100" defaultValue="100" label='Health (hp)' statName='maxHealth' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="5" label='Regen (hp/s)' statName='regenValue' onChange={onChange}/>
                    <Spinner minValue="0" maxValue="100" defaultValue="1" label='Regen Delay (s)' statName='regenDelay' onChange={onChange}/>
                </div>
                
            </div>
        )
    }
}
