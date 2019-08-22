import React, { Component } from 'react'
import Router from './Router';

// import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',

    }
  }

  // componentWillMount() {
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyAe0t2aRPZcutEBO7hjXp4rO-T-078QM2o",
  //     authDomain: "bus-bench.firebaseapp.com",
  //     databaseURL: "https://bus-bench.firebaseio.com",
  //     projectId: "bus-bench",
  //     storageBucket: "bus-bench.appspot.com",
  //     messagingSenderId: "1003500493080",
  //     appId: "1:1003500493080:web:f6ac4616aebe0188"
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  // }

  render() {
    return (
      <Router />
    )
  }
}
