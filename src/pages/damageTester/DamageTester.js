import React, { Component } from 'react';
import SpriteDisplay from './SpriteDisplay';
import StatManager from './StatManager';

import './DamageTester.css';

class DamageTester extends Component {
    
  state = {
    damageStats:
      {
        isAutoAttack: false,
        attackDamage: 10,
        attackSpeed: 1,
        damageOverTime: 0,
        vulnerableValue: 0,
        critChance: 0,
        critValue: 0,
        executeValue: 0,
      },
    targetStats:
        {
            healthPoints: 100,
            healing: 1,
            healDelay: 2,
        }
  }

  onAttack = (id) => {
    this.setState({ tools : this.state.tools.map(tool => {
      if(tool.id === id) {
        tool.amountInInventory = 0
          
      } else {
        tool.amountInInventory = 1
      }
      return tool
    })})
  };

  render() {
    return (
      <div className="component-app">
        <h1>Test Your Damage Here!</h1>
        <SpriteDisplay />
        <StatManager damageStats={this.state.damageStats} />
      </div>
    )
  }
}

export default DamageTester;