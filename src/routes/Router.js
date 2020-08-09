import React from "react"
import {View, Text,Stylesheet} from "react-native"
import { Router, Scene, Actions, Drawer} from "react-native-router-flux"
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import CFPDisplayScreen from './CFPDisplayScreen'
import WelcomeScreen from "./WelcomeScreen"
import MeasureScreen from "./MeasureScreen"
import ReduceScreen from "./ReduceScreen"
import RemoveScreen from './RemoveScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import ChangePasswordScreen from './ChangePasswordScreen' 
import UserCategoryScreen from './UserCategoryScreen'
import UserProfile from '../components/UserProfile'
import TravelCategoryScreen from '../routes/TravelCategoryScreen'



//Functional - Router Component

const RouterComponent = () => {
    return(
        <Router>
            <Scene key='root' >
                <Scene key='welcome' component={WelcomeScreen}  inital hideNavBar />
                <Scene key='measure' component={MeasureScreen}  hideNavBar />
                <Scene key='reduce' component={ReduceScreen}  hideNavBar />
                <Scene key='remove' component={RemoveScreen}  hideNavBar />
                <Scene key='login' component={LoginScreen} hideNavBar />
                <Scene key='signup' component={SignUpScreen} hideNavBar />
                <Scene key="forgotpwd" component={ForgotPasswordScreen} hideNavBar />
                <Scene key="changepwd" component={ChangePasswordScreen} hideNavBar />
                <Drawer
                    key='userprofile'
                    contentComponent = {UserProfile}
                    hideNavBar
                    drawerPosition='left'
                    
                >
                     <Scene key="cfpdisplay" component={CFPDisplayScreen}  hideNavBar />
                     <Scene key="usercategory" component={UserCategoryScreen}  hideNavBar />
                     <Scene key="travelcategory" component={TravelCategoryScreen}  hideNavBar />
                </Drawer>
                
                
            </Scene>
        
        </Router>

    )
};


export default RouterComponent;

/*
 
 */