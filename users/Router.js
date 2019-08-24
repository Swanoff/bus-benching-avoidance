import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import DrawerContent from './src/Components/Drawer/DrawerContent';
import Home from './src/Screens/Home';
import Results from './src/Screens/Results';
import Track from './src/Screens/Track';
import ScanQR from './src/Screens/ScanQR';
import Rate from './src/Screens/Rate';
import Profile from './src/Screens/Profile';

const routerComponent = () => {
    return(
        <Router>
            <Drawer
                contentComponent={DrawerContent}
                >
                <Scene>
                    <Scene 
                        key='Home'
                        component={Home}
                        initial
                    />
                    <Scene 
                        key='Results'
                        component={Results}
                    />
                    <Scene
                        key='Track'
                        component={Track}
                    />
                    <Scene 
                        key='ScanQR'
                        component={ScanQR}
                    />
                    <Scene
                        key='Rate'
                        component={Rate}
                    />
                    <Scene 
                        key='Profile'
                        component={Profile}
                    />
                </Scene>
            </Drawer>
        </Router>
    )
}

export default routerComponent;