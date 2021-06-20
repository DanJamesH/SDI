import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, WMSTileLayer, LayersControl, Popup, Polyline, CircleMarker, Polygon, FeatureGroup } from "react-leaflet";
import VectorDataDisplay from '../VectorDataDisplay'
import reea from '../../../assets/GeoJSON/reea.json'
import grid from '../../../assets/GeoJSON/grid.json'
import substations from '../../../assets/GeoJSON/substations.json'
import roads from '../../../assets/GeoJSON/roads.json'
import wave from '../../../assets/GeoJSON/wave.json'

const Map = ({
    dataset
}) => {

    const position = [-33.542795, 20.441732]

    const polygonOptions = { color: '#00c853', weight:1, fillColor: 'green' }
    const polylineOptions = { color: '#039be5', weight:1, fillColor: '#039be5'}
    const circleOptions = { color: '#c62828', weight:1, fillColor: '#f44336'}

    const getPoints = (arr) => {
        let points = []
        arr.forEach(element => {
            let test = element.reverse()
            points.push([test[1], test[0]])
        })
        return points
    }

    useEffect(() => {
        switch (dataset.id) {
            case 'reea':
                setLayer(reea)
                setLoading(false)
                break
            case 'grid':
                setLayer(grid)
                setLoading(false)
                break
            case 'substations':
                setLayer(substations)
                setLoading(false)
                break
            case 'roads':
                setLayer(roads)
                setLoading(false)
                break
            case 'wave':
                setLayer(wave)
                setLoading(false)
                break
        }
    })

    const [loading, setLoading] = useState(true)
    const [layer, setLayer] = useState(null)

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
                    {/* {dataset.type === 'raster' ? */}
                        <WMSTileLayer
                            url={dataset.url}
                            layers={dataset.layer}
                            format="image/png"
                            transparent="true"
                        /> 
                        {/* : <FeatureGroup>
                            <div>
                                {loading ? <p>nothing</p> : layer.features.map((element) => {
                                    switch (layer.geometryType) {
                                        case "esriGeometryPolygon":
                                            return (element.geometry.rings.map(ele => (
                                                <Polygon pathOptions={polygonOptions} positions={getPoints(ele)}>
                                                    <Popup maxWidth="35vw" maxHeight="auto" maxHeight='auto' height="30vh">
                                                        {
                                                            <div style={{ width: '35vw', maxWidth: '35vw', maxHeight: '25vh', height: "30vh", display: 'flex' }}>
                                                                <VectorDataDisplay
                                                                    data={element.attributes}
                                                                />
                                                            </div>
                                                        }
                                                    </Popup>
                                                </Polygon>
                                            )))
                                        case "esriGeometryPolyline":
                                            return (element.geometry.paths.map(ele => (
                                                <Polyline pathOptions={polylineOptions} positions={getPoints(ele)}>
                                                    <Popup maxWidth="35vw" maxHeight="auto" maxHeight='auto' height="30vh">
                                                        {
                                                            <div style={{ width: '35vw', maxWidth: '35vw', maxHeight: '25vh', height: "30vh", display: 'flex' }}>
                                                                <VectorDataDisplay
                                                                    data={element.attributes}
                                                                />
                                                            </div>
                                                        }
                                                    </Popup>
                                                </Polyline>
                                            )))
                                        case "esriGeometryPoint":
                                            return (
                                                <CircleMarker center={[element.geometry.y, element.geometry.x]} pathOptions={circleOptions} radius={5}>
                                                    <Popup maxWidth="35vw" maxHeight="auto" maxHeight='auto' height="30vh">
                                                        {
                                                            <div style={{ width: '35vw', maxWidth: '35vw', maxHeight: '25vh', height: "30vh", display: 'flex' }}>
                                                                <VectorDataDisplay
                                                                    data={element.attributes}
                                                                />
                                                            </div>
                                                        }
                                                    </Popup>
                                                </CircleMarker>
                                            )
                                    }
                                })}
                            </div>
                        </FeatureGroup>
                    } */}
                </LayersControl.Overlay>
            </LayersControl>
        </MapContainer>
    )
}

export default Map