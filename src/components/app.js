import React, { Component } from 'react';
import SupersList from './Supers/supers_list';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Supers List</h1>
        <h2>Top Three Favorite Supers.</h2>
        <SupersList heading ="SpiderMan"/>
        <SupersList heading ="Venom"/>
        <SupersList heading ="Thor"/>
        <h3>If Everyone is super, then no one is.....</h3>
      </div>
    );
  }
}
