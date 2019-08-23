import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import firebase, { database } from 'firebase';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const gotoBusA = () => Actions.Track({busName: '96A'});
        const gotoBusB = () => Actions.Track({busName: '96B'});

        return (
            <View style={results.layout}>
                <Text style={results.title}>2 buses found</Text>

                <View>
                    <TouchableNativeFeedback onPress={gotoBusA}>
                        <View style={results.bus}>
                            <Text style={results.busName}>96A</Text>
                            <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View>
                    <TouchableNativeFeedback onPress={gotoBusB}>
                        <View style={results.bus}>
                            <Text style={results.busName}>96B</Text>
                            <Text style={results.route}>Gandhipuram - Ettimadai</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const results = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 25
    },
    bus: {
        marginTop: 30,
        padding: 10
    },
    busName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    route: {
        fontWeight: '200',
        fontSize: 15
    }
})