import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import DrawerContent from './src/Components/Drawer/DrawerContent';
import Home from './src/Screens/Home';

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
                    />
                </Scene>
            </Drawer>
        </Router>
    )
}

export default routerComponent;