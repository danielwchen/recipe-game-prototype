import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Spinner.css'

export default class Spinner extends Component {
    static propTypes = {
        statName: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        defaultValue: PropTypes.string.isRequired,
        minValue: PropTypes.string.isRequired,
        maxValue: PropTypes.string.isRequired,
    }

    render() {
        const {statName, label, onChange, defaultValue, minValue, maxValue} = this.props;

        return (
            <div className='component-spinner'>
                {label}<br/>
                <input type="number" className="spinner" min={minValue} max={maxValue} defaultValue={defaultValue} onChange={onChange.bind(this, statName)}/>
            </div>
        )
    }
}
