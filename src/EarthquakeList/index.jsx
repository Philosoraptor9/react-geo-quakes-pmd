import React, { Component } from 'react';

class EarthquakeList extends Component {
    render(){
        return(
            <ul>
                {this.props.earthquakes.map((earthquake, index) => {
                    return(
                        <li key={index}>
                        Title: {earthquake.properties.title} <br/>  
                        Magnitude: {earthquake.properties.mag}
                        Location: {earthquake.geometry.coordinates} <br/>            
                        </li> 
                    )   
                })}  
            </ul>
        )   
    }
}





export default EarthquakeList;