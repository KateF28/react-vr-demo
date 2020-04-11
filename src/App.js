import React from 'react';
import {
    asset, Pano, Text, View, AmbientLight, Sound, VrButton
} from 'react-vr';
// import Primitives from "./Primitives";
import Chair from './Chair';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'background.jpg',
            sound: 'sound.wav',
            text: 'Go outside',
            visible: true
        }
    }
    changeScene() {
        this.setState({
            background: 'park.jpg',
            sound: 'birds.wav',
            text: '',
            visible: false
        })
    };
    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                <Pano source={asset(this.state.background)}/>
                <Sound loop={true}
                       onLoad = {console.log("Sound has been loaded")}
                volume={0.95} source={{
                    wav: asset(this.state.sound),
                }}
                />
                <VrButton onClick={this.changeScene.bind(this)}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 0.3,
                            fontWeight: '400',
                            color: '#1b0a03',
                            // layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [-0.8, 1.5, -4]}],
                        }}>
                        {this.state.text}
                    </Text>
                </VrButton>
                {this.state.visible && <Chair />}
            </View>
        );
    }
};

