import { ComposableMap, Geographies, Geography, Annotation, Marker } from 'react-simple-maps';
import styles from '@/components/Map/Map.module.scss';

export const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1350,
            }}
            className={styles.map}
        >
            <Geographies geography="/features.json" fill="#2C065D" stroke="#FFFFFF" strokeWidth={0.5}>
                {({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
            </Geographies>
            <Annotation
                subject={[19.93658, 50.06143]}
                dx={-30}
                dy={-55}
                connectorProps={{
                    stroke: '#FFF',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                }}
            >
                <text className={styles.map__city} textAnchor="middle" alignmentBaseline="text-after-edge" fill="#FFF">
                    {'Kraków'}
                </text>
            </Annotation>
            <Marker coordinates={[19.93658, 50.06143]}>
                <circle r={4} fill="#FFF" />
            </Marker>
        </ComposableMap>
    );
};
