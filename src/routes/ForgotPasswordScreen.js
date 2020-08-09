import React, { Component } from 'react';
import { Stylesheet, View,FlatList, Image } from "react-native";
import { Icon, Container, Header, Input, Content, Footer, FooterTab, Button,Text, Item, Form,Thumbnail} from 'native-base';
import * as firebase from "firebase"
import "@firebase/firestore"
import {firebaseApp,firestoreDB} from '../../util/Firebase'
//import { sendEmailWithPassword } from "../config/Firebase"
import { Actions } from 'react-native-router-flux';
import Spinner from '../components/Spinner'



class ForgotPasswordScreen extends Component {

	constructor(props){
		super(props)
		this.state= ({
      email: '',
      loading: false
		});
    }

  handleFP = () => {
        const{email,loading }= this.state;
      this.setState({loading: true})
      firebaseApp.auth().sendPasswordResetEmail(email)
			.then( (useremail) => { 
                    
                alert("Please check "+email+" and follow the Instructions to Reset the Password")
                Actions.login()
			}).catch((error) => {alert("Error is: "+ error)
			console.log(error)})    
  }
    
  goBack() {
      Actions.pop()
  }


  handleLoading(){
    if(this.state.loading){
        return(
            <Spinner />
        )
    }

    return(
      <Button 
            style={styles.btnStyle}
            onPress={this.handleFP}
      >
            <Text style={{ color: "#fff", fontSize: 20 }}>Send Email</Text>
      </Button > 
    );
  }

  
  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: "#8fbb2d" }} />
       
        <Content style={styles.contentStyle}> 
            <Image
                    style={{width: "100%", height: 200, resizeMode: "contain", alignItems:"center", justifyContent: "center",marginTop:10}}
                    source={require('../../util/images/signupscreen_image.png')}            />
            <Text style={{ fontSize: 28, textAlign: "center" , marginTop:25}}> Forgot Password ? </Text>
            <Form style={{margin: 30}}>
                <Item success>
                    <Thumbnail square source={require('../../util/images/login_email.png')} style={{width: 20, height: 20}}/> 
                    <Input
                        style={{paddingLeft: 20}}
                        placeholder={"Email Address"}
                        value={this.state.email}
                        onChangeText={(email)=> this.setState({email: email})}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                </Item>
                <Text style={{ color: "#0c0c0c", fontSize: 13, textAlign: "center" , marginTop:12}}> Enter the Email Address to receive Password Reset details </Text>
                <View>
                        {this.handleLoading()}
                </View>
            </Form>
        </Content>
        <Footer style={{ backgroundColor: "#8fbb2d"}}>
          <FooterTab style={{ backgroundColor: "#8fbb2d"}}>
          <Button full
				      onPress={this.goBack}
          >
             
                <Icon name="ios-arrow-back" style={{ color: "#fff", fontSize: 35 }}>
                    <Text style={{ color: "#fff", fontSize: 30, margin:5 }}> Back</Text>
                </Icon>
              
          </Button>
          </FooterTab>
        </Footer>
       

      </Container>
    );
  }
}
const styles = {
    container: {
        alignSelf: 'center',
        width: '100%',
        
      },
      contentStyle: {
        alignSelf: 'center',
        width: '75%',
        height: '80%'
       
      },
  
  btnStyle: {
    margin:50, 
    width: 200,
    justifyContent:"center",
    alignSelf: "center",
    backgroundColor:"#8fbb2d",
    borderRadius: 20
  },
}


export default ForgotPasswordScreen;

