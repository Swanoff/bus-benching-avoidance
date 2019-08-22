import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import DrawerContent from './src/Components/Drawer/DrawerContent';
import Home from './src/Screens/Home';
// import LoginForm from './src/Screens/LoginForm';

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
                </Scene>
            </Drawer>
        </Router>
    )
}

export default routerComponent;