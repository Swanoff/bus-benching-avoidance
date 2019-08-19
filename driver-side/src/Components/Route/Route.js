import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';

export default class Route extends Component {
    render() {
        const markers = [
            {
                value: 0,
                label: 'Gandhipuram'
            },
            {
                value: 11,
                label: 'Ukkadam'
            },
            {
                value: 19,
                label: 'Madhukarai'
            },
            {
                value: 27,
                label: 'Ettimadai'
            }
        ];

        function valuetext(value) {
            return `${value} Km`;
        }

        return (
            <div>
                <Slider
                    defaultValue={0}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    max={27}
                    valueLabelFormat={valuetext}
                    valueLabelDisplay="on"
                    marks={markers}
                />               
            </div>
        )
    }
}
