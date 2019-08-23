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
        firebase.database().ref(`bus/${this.props.busName}/distance`).once('value', (snapshot) => {
            this.setState({
                distance: snapshot.val()
            })
        })
        return (
            <View>
                <Text>{this.state.distance}</Text>
                {
                    (this.state.distance == 0)
                    ?
                    (<Text>Bus is at Gandhipuram</Text>)
                    :
                        (this.state.distance>0 && this.state.distance<11)
                        ?
                        (<Text>Bus is {11 - this.state.distance}Kms away from Ukkadam</Text>)
                        :
                            (this.state.distance == 11)
                            ?
                            (<Text>Bus is at Ukkadam</Text>)
                            :
                                (this.state.distance>11 && this.state.distance<19)
                                ?
                                (<Text>Bus is {19 - this.state.distance}Kms away from Madhukarai</Text>)
                                :
                                    (this.state.distance == 19)
                                    ?
                                    (<Text>Bus is at Madhukarai</Text>)
                                    :
                                        (this.state.distance>19 && this.state.distance<27)
                                        ?
                                        (<Text>Bus is {27 - this.state.distance}Kms away from Ettimadai</Text>)
                                        :
                                            (this.state.distance == 27)
                                            ?
                                            (<Text>Bus is at Ettimadai</Text>)
                                            :
                                            null
                }
            </View>
        )
    }
}
