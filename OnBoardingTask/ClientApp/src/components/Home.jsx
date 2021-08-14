import React, { Component } from 'react';
import {Customers} from './Customers/Customers';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Customers />
       
      </div>
    );
  }
}
