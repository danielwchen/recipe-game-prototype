import React, { Component } from 'react'
import IngredientItem from './IngredientItem'
import PropTypes from 'prop-types';

class Drawer extends Component {

  render() {
    return (
      <div>
          <div>
        <h1>This is the Drawer</h1>
        <p>Click to pick a cooking tool to use.</p>
        {
          this.props.inventory.map((tool) => (
          <IngredientItem ingredient={tool} onClickAction={this.props.onClickAction} 
            displayNumber={tool.amountInInventory} key={tool.id}/>
          ))
        }
        </div>
        <div>
            <button type="button">Cook!</button>
        </div>
      </div>

    )
  }
}

Drawer.propTypes = {
  inventory: PropTypes.array.isRequired,
  onClickAction: PropTypes.func.isRequired,
}

export default Drawer