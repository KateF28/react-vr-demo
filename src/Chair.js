import React from 'react';
import {
    asset, View, Model, StyleSheet
} from 'react-vr';


export default class Chair extends React.Component {
    render() {
        return (
            <View>
                <Model
                    source={{
                    obj: asset('/chair/chair.obj'),
                    mtl: asset('/chair/chair.mtl'),
                }}
                    style={{
                        // position: 'absolute',
                        transform: [
                            {translate: [-2.2, -1.90, -1.7]},
                            {scale: 0.02},
                            {rotateX: -0}
                        ]
                    }}
                />
            </View>
        );
    }
};

