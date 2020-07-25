import React, { Component } from 'react'
import Inventory from './Inventory';
import Pot from './Pot';
import Plate from './Plate'
// import Drawer from './pages/recipeTester/Drawer'

export default class RecipeTester extends Component {
    state = {
      ingredients: [
        {
          id: 1,
          name: 'flour',
          amountInInventory: 5,
          amountTotal: 5
        },
        {
          id: 2,
          name: 'egg', 
          amountInInventory: 5,
          amountTotal: 5
        },
        {
          id: 3, 
          name: 'water',
          amountInInventory: 5,
          amountTotal: 5
        },
        {
          id: 4, 
          name: 'wheat',
          amountInInventory: 5,
          amountTotal: 5
        }
      ], 
      tools: [
        {
          id: 1,
          name: 'hand',
          amountInInventory: 0,
          amountTotal: 1
        },
        {
          id: 2,
          name: 'knife', 
          amountInInventory: 1,
          amountTotal: 1
        },
        {
          id: 3,
          name: 'baking sheet',
          amountInInventory: 1,
          amountTotal: 1
        }
      ]
    }

      
  addItemToPot = (id) => {
    this.setState({ ingredients : this.state.ingredients.map(ingredient => {
      if(ingredient.id === id) {
        if(ingredient.amountInInventory > 0) {
          ingredient.amountInInventory--
          console.log('Add this ingredient ' + ingredient.name)
        }else {
          console.log('No more ' + ingredient.name)
        }
      } 
      return ingredient
    })})
  };

  removeItemFromPot = (id) => {
    this.setState({ ingredients : this.state.ingredients.map(ingredient => {
      if(ingredient.id === id) {
        if(ingredient.amountInInventory < ingredient.amountTotal) {
          ingredient.amountInInventory++
          console.log('Add this ingredient ' + ingredient.name)
        }else {
          console.log('No more ' + ingredient.name)
        }
      } 
      return ingredient
    })})
  };

  pickTool = (id) => {
    this.setState({ tools : this.state.tools.map(tool => {
      if(tool.id === id) {
        // if (tool.amountInInventory) {
        //   tool.amountInInventory = 0
        // } else {
        //   tool.amountInInventory = 1
        // }
        tool.amountInInventory = 0
          
      } else {
        tool.amountInInventory = 1
      }
      return tool
    })})
  };

  cookPot = () => {
    // normalize ingredients (divide all ingredients by most common ingredient, keep track of factor)
    // append ingredient list with tool list
    // use a nearest neighbors trick to find closest recipe
    // calculate a metric of closeness to determine quality
    // use normalize factor to scale up output
    // stretch goal: create an automated description of improvement tips
    // give output
    // put output back into inventory
  }


    render() {
        return (
            <React.Fragment>
            <Inventory inventory={this.state.ingredients} onClickAction={this.addItemToPot}/>
            
            <Pot inventory={this.state.ingredients} onClickAction={this.removeItemFromPot}/>

            {/* <Drawer inventory={this.state.tools} onClickAction={this.pickTool}/> */}

            <Plate/>
            </React.Fragment>
        )
    }
}
