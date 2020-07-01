import React, { Component } from 'react'
import IngredientItem from './IngredientItem'
import PropTypes from 'prop-types';

class Pot extends Component {
  render() {
    return (
      <div>
        <h1>This is the Pot</h1>
        <p>Click to remove ingredient from pot.</p>
        {
          this.props.inventory.map((ingredient) => (
          <IngredientItem ingredient={ingredient} onClickAction={this.props.onClickAction} 
            displayNumber={ingredient.amountTotal - ingredient.amountInInventory} key={ingredient.id}/>
          ))
        }
      </div>
        
    )
  }
}

Pot.propTypes = {
  inventory: PropTypes.array.isRequired,
  onClickAction: PropTypes.func.isRequired,
}

export default Pot