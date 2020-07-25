import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Spinner extends Component {
    static propTypes = {
        name: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        defaultValue: PropTypes.number.isRequired,
        minValue: PropTypes.number.isRequired,
        maxValue: PropTypes.number.isRequired,
    }

    render() {
        const {name, onChange, defaultValue, minValue, maxValue} = this.props;

        return (
            <div>
                {name}
                <input type="number" className="spinner" min={minValue} max={maxValue} defaultValue={defaultValue} onChange={onChange}/>
            </div>
        )
    }
}
