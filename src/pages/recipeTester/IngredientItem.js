import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class IngredientItem extends Component {

    getStyle = () => {
        return {
            borderWidth: 3,
            borderColor: 'blue',
            borderStyle: 'solid',
            borderRadius: 20,
            padding: 10,
            margin: 5,
            width: 100,
            height: 100,
            textAlign: 'center',
            display: 'inline-block',
            userSelect: 'none',
            backgroundColor: this.props.displayNumber > 0 ? 'lightblue' : 'pink'
        }
    }

    render() {
        // destructure inputs
        const { id, name } = this.props.ingredient;
        
        return (
            <div className="IngredientItem" style={this.getStyle()} onClick={this.props.onClickAction.bind(this, id)}>
                {isNaN(this.props.displayNumber) ? name : name + ' ' + this.props.displayNumber}
            </div>
        )
    }
}

IngredientItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onClickAction: PropTypes.func.isRequired,
  displayNumber: PropTypes.number.isRequired
}

export default IngredientItem
