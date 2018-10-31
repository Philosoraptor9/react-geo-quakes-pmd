import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';




// export default class QuakeMarker extends Component {
//     render(){
//         return(
//             <Marker position={this.props.position}
//                     icon={crack}>
//             </Marker>
//         )
//     }
// }

class QuakeMap extends Component {

    render(){
        const allQuakes = this.props.earthquakes.map((quake, i) =>{
            console.log(quake);
            return (<Marker 
                key={i} 
                title={quake.properties.title} 
                name={quake.properties.place}
                position={{lat: quake.geometry.coordinates[1], lng: quake.geometry.coordinates[0]}} />
            )      
        })
        return (
            <Map google={this.props.google}
				initialCenter={{lat:39.7392, lng: -104.9903}}
				zoom={14}
				style={{width: '40%', height:'60%', position: 'relative' }}
			>
                {allQuakes}
			</Map>
            
        );
    }
}


export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(QuakeMap)