'use strict';
import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Left,FooterTab, Footer, Root , Radio, Right} from 'native-base';
import {Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export default class MeasureScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
		
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipeLeft(gestureState) {
    this.setState();
  }
 
  onSwipeRight(gestureState) {
    this.setState();
  }
 
  onSwipe(gestureName, gestureState) {
    const { SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
		
		this.setState({backgroundColor: '#fff'},Actions.reduce());
		
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: '#fff'});
        break;
    }
  }
 
  render(){
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    
    return(
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
      >
   
        <Root>
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
            <Body >
              <Button transparent style={{backgroundColor:"white",display: "flex", alignSelf: "flex-end", paddingRight:5, paddingTop:20}} 
              onPress= {() => {Actions.login(); }}> 
                
                <Text style = {{color: "#99cc00", fontSize:20}}>Get Started</Text> 
              </Button>
            </Body>
          </Header>

        <Text style={{fontSize:50, alignSelf: "center",paddingTop:30}}>Measure</Text>

        <Image
          style={{width: "100%", height: 300, resizeMode: "contain", alignItems:"center", justifyContent: "center"}}
          source={require('../../util/images/measure_screen_img.png')}
        />
          
          <Text style={{fontSize:20, alignSelf: "center",fontWeight: "bold",paddingLeft:40,paddingRight:20, paddingBottom:100}}>
          Know your C-footprint in four simple steps through our simple tracker
        </Text>
      
        <Footer style={{backgroundColor: "#white" ,display:"flex"  }}>
        
          <Body>
      
            <Radio style={styles.radio}
            color={"#99cc00"}
                  selectedColor={"#99cc00"}
                  selected={true}
                >
            </Radio>

            <Radio style={styles.radio1}
                  color={"#99cc00"}
                  selectedColor={"#99cc00"}
                  selected={false}
                  onPress= {() => {Actions.reduce(); }}>
            </Radio>

            <Radio style={styles.radio1}
            color={"#99cc00"}
                  selectedColor={"#99cc00"}
                  selected={false}
                  >
            </Radio>
          
            <Right>
            <Button transparent style={{backgroundColor:"white" , paddingRight:50, paddingBottom:40}} 
                onPress= {() => {Actions.reduce(); }}> 
                
                <Text style = {{color: "#99cc00", fontSize:25}}> Next</Text> 
              
              </Button>
              </Right>
            </Body>
        
        </Footer>

        </Container>
        </Root>
      </GestureRecognizer>

    );
  }

}
const styles = {
  radio:{
    paddingLeft:50,
    paddingRight:5,
    paddingBottom:30
  },
  radio1:{
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:30
  }
}