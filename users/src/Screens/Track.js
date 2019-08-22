import React, { Component } from 'react';
import {View, Text} from 'react-native';
import firebase, { database } from 'firebase';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: ''
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
        firebase.database().ref('bus/96/distance').once('value', (snapshot)=>{
            this.setState({
                distance: snapshot.val()
            })
        })
        return (
            <View>
                <Text>{this.state.distance}</Text>
            </View>
        )
    }
}
