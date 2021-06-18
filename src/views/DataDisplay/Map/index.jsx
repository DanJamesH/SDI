import { MapContainer, TileLayer, WMSTileLayer, LayersControl, Marker, Popup, Polyline, Tooltip, Polygon, FeatureGroup } from "react-leaflet";
import Typography from '@material-ui/core/Typography';
import VectorDataDisplay from '../VectorDataDisplay'
import reea from '../../../assets/GeoJSON/reea.json'

const Map = ({
    dataset
}) => {

    const position = [-33.542795, 20.441732]

    const purpleOptions = { color: 'purple' }

    const getPoints = (arr) => {
        let points = []
        arr.forEach(element => {
            let test = element.reverse()
            points.push([test[1],test[0]])
        })
        return points
    }

    return (
            <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
            <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Base OpenStreetMap">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </LayersControl.BaseLayer>
            <LayersControl.Overlay name={dataset.title} checked>
                {dataset.type === 'raster' ?
                     <WMSTileLayer
                        url={dataset.url}
                        layers={dataset.layer}
                        format="image/png"
                        transparent="true"
                 /> : <FeatureGroup>
                    {reea.features.map((element) => ( 
                        element.geometry.rings.map(ele => (
                            <Polygon pathOptions={purpleOptions} positions={getPoints(ele)} eventHandlers={{
                                click: () => {
                                console.log('marker clicked')
                                }
                            }}>
                                <Popup maxWidth="35vw" maxHeight="auto" maxHeight='auto' height="30vh">
                                    {
                                        <div style={{width:'35vw', maxWidth:'35vw', maxHeight:'25vh', height:"30vh", display:'flex'}}>
                                            <VectorDataDisplay
                                                data={element.attributes}
                                            />
                                        </div>
                                    }
                                </Popup>
                            </Polygon>
                        ))
                    ))}
             </FeatureGroup>
            }  
            </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>        
    )
}

export default Map