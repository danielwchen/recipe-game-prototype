import React, { Component } from 'react';
import IngredientItem from './IngredientItem';
import PropTypes from 'prop-types';

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <h1>This is the Inventory</h1>
        <p>Click to move ingredient to pot</p>
        {this.props.inventory.map((ingredient) => (
          <IngredientItem ingredient={ingredient} onClickAction={this.props.onClickAction} 
            displayNumber={ingredient.amountInInventory} key={ingredient.id}/>
          ))
        }
      </div>
    );
  }
  
}

Inventory.propTypes = {
  inventory: PropTypes.array.isRequired,
  onClickAction: PropTypes.func.isRequired,
}

export default Inventory;
