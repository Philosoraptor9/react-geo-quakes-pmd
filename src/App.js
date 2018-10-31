import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList';
import QuakeMap from './maps';
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson
// To get magnitude and title:
// we need to access title and magnitude attributes in the properties object within the first object 
// in the features array within the whole object
// Denver coordinates: 39.7392° N, 104.9903° W


class App extends Component {
  constructor(){
    super();
    this.state = {
      earthquakes: [],
    }
  }
  getQuakes = async () => {
    try{
      const quakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const quakesJson = await quakes.json();
      return quakesJson;
    }catch(err){
      return err
    }
  }
  componentDidMount(){
    this.getQuakes().then((quakes) => {
      this.setState({earthquakes: quakes.features});
    }).catch((err) => {
      return err;
    })
  }
  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <QuakeMap earthquakes={this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeList earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
