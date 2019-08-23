import React, { Component } from 'react';
import QRCode from 'qrcode.react';

export default class IssuedTicket extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url(${require('../../../../src/assets/ticket_right.png')})`, backgroundSize: 'cover', width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 0}}>
              <div>#{this.props.number}</div>
              <QRCode 
                level='Q'
                style={{width: 75}}
                bgColor='#fe5d21'
                renderAs='svg'
                value={JSON.stringify({
                  source: this.props.src,
                  destination: this.props.dest,
                  distance: this.props.kms
                })}
              />
            </div>
        )
    }
}
