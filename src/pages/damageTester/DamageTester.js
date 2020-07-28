import React, { Component } from 'react';
import SpriteDisplay from './SpriteDisplay';
import StatManager from './StatManager';

import './DamageTester.css';

class DamageTester extends Component {
    
  state = {
    stats:
      {
        // attack on toggle
        isAutoAttack: false,
        // attack values
        attackDamage: 10,
        attackSpeed: 1,
        damageOverTime: 0,
        vulnerableValue: 0,
        critChance: 0,
        critValue: 0,
        executeValue: 0,
        // target health values
        maxHealth: 100,
        regenValue: 1,
        regenDelay: 2,
      },
    target:
      {
        currentHealth: 100,
        currentHealthPercent : 100,
        reviveDelay: 5, // seconds
      }
  }

  componentDidMount() {
    console.log('Component is good');
    console.log(this.state);

    // this.attackInterval = setInterval(this.attackIntervalFunction, 1000);
  }

  componentWillUnmount() {
    console.log('Component unmounted');
    clearInterval(this.attackInterval);
  }

  attackIntervalFunction = () => {
    console.log(Date.now())
    // if(this.state.stats.isAutoAttack)
    // {
    //   console.log('attack');
    // } else {
    //   console.log('no attack');
    // }
  }

  onAttack = (auto) => {
    // this.setState({ tools : this.state.tools.map(tool => {
    //   if(tool.id === id) {
    //     tool.amountInInventory = 0
          
    //   } else {
    //     tool.amountInInventory = 1
    //   }
    //   return tool
    // })})
  };

  onChange = (name, source) => {
    const newValue = source.target.value;
    this.setState(prevState => ({
      stats : {
        ...prevState.stats, // keep other properties the same
        [name]: newValue, // update the new field
      }
    }));
  };

  render() {
    return (
      <div className="component-app">
        <h1>Test Your Damage Here!</h1>
        <SpriteDisplay />
        <StatManager damageStats={this.state.damageStats} onChange={this.onChange}/>
      </div>
    )
  }
}

export default DamageTester;