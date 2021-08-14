import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import 'semantic-ui-css/semantic.min.css'

import './custom.css'
import { Customers } from './components/Customers/Customers';
import { Products } from './components/Products/Products';
import { Stores } from './components/Stores/Stores';
import {Sales} from './components/Sales/Sales';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/Customers' component={Customers} /> 
        <Route exact path='/Products' component={Products} />
        <Route exact path='/Stores' component={Stores} /> 
        <Route exact path='/Sales' component={Sales} />

    </Layout>
    );
  }
}
