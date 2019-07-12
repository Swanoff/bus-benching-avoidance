import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';

export default class TicketInput extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', position: 'absolute'}}>
              <div style={{display: 'flex', marginBottom: 20}}>
                <img src={require('../../../assets/board.png')} alt='board' height={35} style={{marginRight: 10}} />
                <span style={{fontWeight: 600, marginLeft: 14, marginTop: 8}}>Stop {this.props.currentStop + 1}</span>
              </div>
              <div style={{display: 'flex'}}>
                <img src={require('../../../assets/drop.png')} alt='drop' height={35} style={{marginRight: 10}} />
                <Dropdown search selection options={this.props.stops} />
              </div>
            </div>
        )
    }
}
