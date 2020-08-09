import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Left,FooterTab, Footer, Root , Radio, Right} from 'native-base';
import {Image, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class WelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state={
            firstlaunch : null
        };
      }
    

      componentDidMount() {
        AsyncStorage.getItem("appLaunched").then(value => {
            if(value==null){ 
                AsyncStorage.setItem("appLaunched", "true").then( () => {
                    console.log("App - First Launch")
                    setTimeout(() => {
            
                        Actions.measure()
                     }, 2000)
                })
            }
            else{
                console.log("Slides shown to User")
                setTimeout(() => {
     
                    Actions.login()
                 }, 2000)
            }
        })
    } 


    render(){

        return(
            <Root>
                <Container>
                    <Text style = {{color: "#99cc00", fontSize:30, alignSelf: "center", paddingTop:100,paddingBottom:75, display:"flex"}}>APP NAME</Text> 

                    <Image
                        style={{width: "100%", height: 300, resizeMode: "contain", alignItems:"center", justifyContent: "center"}}
                        source={require('../../util/images/measure_screen_img.png')}
                    />

                </Container>
        </Root>
        )
    }
}




