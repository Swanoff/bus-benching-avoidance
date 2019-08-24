import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import firebase, { database } from 'firebase';
import { max } from 'rxjs/operators';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Ukkadam: 0,
            Madhukarai: 0,
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
        firebase.database().ref(`bus/${this.props.busName}`).once('value', (snapshot) => {
            var bus = snapshot.val();
            this.setState({
                Ukkadam: bus['Ukkadam'],
                Madhukarai: bus['Madhukarai'],
                distance: bus['distance']
            })
        })
        return (
            <View style={track.layout}>

                {/* Bus icon with name */}
                <View style={track.busHead}>
                    <Image 
                        source={require('../assets/bus.jpg')}
                        style={{height: 40, width: 40}}
                    />
                    <Text style={track.busName}>{this.props.busName}</Text>
                </View>

                <View style={track.liveBox}>
                    <Text style={track.liveHead}>Live Status</Text>
                    {
                        (this.state.distance == 0)
                        ?
                        (<Text style={track.live}>Bus is at Gandhipuram</Text>)
                        :
                            (this.state.distance>0 && this.state.distance<11)
                            ?
                            (<Text style={track.live}>Bus is {11 - this.state.distance}Kms away from Ukkadam</Text>)
                            :
                                (this.state.distance == 11)
                                ?
                                (<Text style={track.live}>Bus is at Ukkadam</Text>)
                                :
                                    (this.state.distance>11 && this.state.distance<19)
                                    ?
                                    (<Text style={track.live}>Bus is {19 - this.state.distance}Kms away from Madhukarai</Text>)
                                    :
                                        (this.state.distance == 19)
                                        ?
                                        (<Text style={track.live}>Bus is at Madhukarai</Text>)
                                        :
                                            (this.state.distance>19 && this.state.distance<27)
                                            ?
                                            (<Text style={track.live}>Bus is {27 - this.state.distance}Kms away from Ettimadai</Text>)
                                            :
                                                (this.state.distance == 27)
                                                ?
                                                (<Text style={track.live}>Bus is at Ettimadai</Text>)
                                                :
                                                null
                    }
                </View>

                <View>
                    <Text style={track.liveHead}>Estimated Status at:</Text>
                    {
                        (this.state.distance < 11)
                        ?
                        (
                            <View>

                                {/* Ukkadam status */}
                                <View style={track.statusBoxOuter}>
                                    <Text style={track.places}>Ukkadam</Text>
                                    <View style={track.statusBox}>
                                        {/* Sitting count at Ukkadam */}
                                        <View style={track.status}>
                                            <Image 
                                                source={require('../assets/seat.png')}
                                                style={{height: 40, width: 40}}
                                            />
                                            <Text style={track.count}>{this.state.Ukkadam>40 ? 40 : this.state.Ukkadam}/40</Text>
                                        </View>
                                        {/* Standing count at Ukkadam */}
                                        <View style={track.status}>
                                            <Image 
                                                source={require('../assets/stand.png')}
                                                style={{height: 40, width: 20}}
                                            />
                                            <Text style={track.count}>{Math.max(0, this.state.Ukkadam-40)}</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Madhukarai status */}
                                <View style={track.statusBoxOuter}>
                                    <Text style={track.places}>Madhukarai</Text>
                                    <View style={track.statusBox}>
                                        {/* Sitting count at Ukkadam */}
                                        <View style={track.status}>
                                            <Image 
                                                source={require('../assets/seat.png')}
                                                style={{height: 40, width: 40}}
                                            />
                                            <Text style={track.count}>{this.state.Madhukarai>40? 40: this.state.Madhukarai}/40</Text>
                                        </View>
                                        {/* Standing count at Ukkadam */}
                                        <View style={track.status}>
                                            <Image 
                                                source={require('../assets/stand.png')}
                                                style={{height: 40, width: 20}}
                                            />
                                            <Text style={track.count}>{Math.max(0, this.state.Madhukarai-40)}</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        )
                        :
                            (this.state.distance>11 && this.state.distance<19)
                            ?
                            (
                                <View>
                                    <View style={track.statusBoxOuter}>
                                        <Text style={track.places}>Madhukarai</Text>
                                        <View style={track.statusBox}>
                                            {/* Sitting count at Ukkadam */}
                                            <View style={track.status}>
                                                <Image 
                                                    source={require('../assets/seat.png')}
                                                    style={{height: 40, width: 40}}
                                                />
                                                <Text style={track.count}>{this.state.Madhukarai>40? 40 : this.state.Madhukarai}/40</Text>
                                            </View>
                                            {/* Standing count at Ukkadam */}
                                            <View style={track.status}>
                                                <Image 
                                                    source={require('../assets/stand.png')}
                                                    style={{height: 40, width: 20}}
                                                />
                                                <Text style={track.count}>{Math.max(0, this.state.Madhukarai-40)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                            :
                            null
                    }
                </View>
            </View>
        )
    }
}

const track = StyleSheet.create({
    statusBox: {
        flexDirection: 'row',
    },
    statusBoxOuter: {
        marginTop: 3,
        marginBottom: 3
    },
    status: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20
    },
    count: {
        fontSize: 20
    },
    busHead: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    busName: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingLeft: 12
    },
    layout: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    live: {
        fontSize: 18
    },
    liveHead: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    liveBox: {
        marginBottom: 30
    },
    places: {
        fontWeight: 17,
        fontWeight: 'bold'
    }
})