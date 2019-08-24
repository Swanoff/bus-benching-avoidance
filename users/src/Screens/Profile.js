import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar, Badge} from 'react-native-elements';
import firebase, { database } from 'firebase';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengerName: 'surya',
            distance: 0
        }
    }

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAe0t2aRPZcutEBO7hjXp4rO-T-078QM2o",
            authDomain: "bus-bench.firebaseapp.com",
            databaseURL: "https://bus-bench.firebaseio.com",
            projectId: "bus-bench",
            storageBucket: "bus-bench.appspot.com",
            messagingSenderId: "1003500493080",
            appId: "1:1003500493080:web:f6ac4616aebe0188"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        firebase.database().ref(`passengers/${this.state.passengerName}/distance`).once('value', (snapshot) => {
            this.setState({
                distance: snapshot.val()
            })
        })
        
        return (
            <View style={profile.layout}>
                <View style={profile.avatar}>
                    <Avatar
                        rounded
                        size="large"
                        title="S"
                        activeOpacity={0.7}
                    />
                    <Badge
                        status="success"
                        // containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                    />
                </View>
                <Text style={profile.name}>{this.state.passengerName}</Text>
                <Text>Distance Travelled: {this.state.distance} Km</Text>
            </View>
        )
    }
}

const profile = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    avatar: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    name: {
        textAlign: 'center',
        fontSize: 20
    }
})