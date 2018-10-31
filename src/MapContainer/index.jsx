import React, { Component } from 'react';
import QuakeMap from './maps';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {

    render() {
    
      return (
        <QuakeMap 
        />
      )
    } 
  }
  
  export default container({
    apiKey: AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg
  })(Container)

  export default Container;