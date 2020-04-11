import React from 'react';
import {
    View, Cylinder, Box, Sphere, StyleSheet
} from 'react-vr';

export default class Primitives extends React.Component {
    render() {
        return (
            <View>
                <Cylinder radiusTop={0.5} radiusBottom={0.5} dimHeight={2} segments={12}
                          style={{
                              transform: [{translate: [-0.5, 2, -3]}]
                          }}
                />
            </View>
        );
    }
};

// <Box dimWidth={2} dimDepth={2} dimHeight={1}
//      style={{
//          color: 'red'
//      }}
// />
