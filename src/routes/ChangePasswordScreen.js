import React, { Component } from 'react';
import { Stylesheet, View,FlatList, Image,StyleSheet } from "react-native";
import { Icon, Container, Header, Input, Content, Footer, FooterTab, Button,Text, Left, Label,Form,Item} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {firebaseApp,firestoreDB} from '../../util/Firebase'
import * as firebase from "firebase"

import {
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

class ChangePasswordScreen extends Component {

	constructor(props){
		super(props)
		this.state= ({
            curr_pass: '',
            new_pass:'',
            cnew_pass:'',
		});
    }


    reauthenticate = (curr_pass) =>{

    var user=firebaseApp.auth().currentUser;
  
    var cred=firebase.auth.EmailAuthProvider.credential(user.email, curr_pass);
    return user.reauthenticateWithCredential(cred);

    }
    

    handleCP = () => {

      if(!this.checkFields()){ //Check if all the Values are entered
        alert("All fields are Mandatory")
        return false
      }

      if (this.passwordcheck()){

        this.reauthenticate(this.state.curr_pass)
        .then(()=>{
          var user=firebaseApp.auth().currentUser;
          user.updatePassword(this.state.new_pass)
          .then(()=>{
              alert("Password is changed")
              Actions.pop();
          }).catch((error)=>{
            alert("Error: "+ error)
          });
        }).catch((error)=>{
          alert("Error: "+ error)
        });
      }
    }
  

    checkFields(){
      const {curr_pass,new_pass, cnew_pass} = this.state
      
      if(curr_pass !== '' && new_pass !=='' && cnew_pass !==''){
        return true;
      }
          
      return false;
  }

  passwordcheck(){
      const {curr_pass,new_pass, cnew_pass} = this.state
      if(curr_pass === new_pass && curr_pass === cnew_pass )
      {
        alert('New Password is same as Old Password')
        return false
      }
      else if (new_pass !== cnew_pass) {
        alert('New Passwords doesnt Match')
          return false
        }
       
          return true; // All password conditions are satisfied
      
         
    }
    
    
    goBack() {
      Actions.pop()
     }

  render() {
    return (
        <Container  style={{ height: hp('100%'),width: wp('100%')}}>
          <Header style={{backgroundColor: "#8fbb2d",height: hp('7%')}} ></Header>
        
          <Content  style={styles.content}> 
            <Image
                style={{width: "100%",height: hp('30%'), resizeMode: 'contain'}}
                source={require("../../util/images/change_pwd_img.png")}            
            />
              <Text style={{ fontSize: 28, textAlign: "center" , marginTop:17}}> Change Password  </Text>
              <Form style={{ width :wp('85%'), height: hp('47%'), alignSelf: "center",marginTop: hp('2%') }}>
                <Item  style={styles.itemStyle}>
                  <Label style={styles.customLabel}>Old Password</Label>
                    <Input
                        style={styles.inputBox2}
                        value={this.state.curr_pass}
                        onChangeText={(curr_pass)=> this.setState({curr_pass})}
                      autoCapitalize='none'
                        secureTextEntry={true}
                    />
                </Item>
                <Item  style={styles.itemStyle}>
                  <Label style={styles.customLabel}>New Password</Label>  
                  <Input
                      style={styles.inputBox2}
                      value={this.state.new_pass}
                      onChangeText={(new_pass)=> this.setState({new_pass})}
                      autoCapitalize='none'
                      secureTextEntry={true}
                      />
                </Item> 
                <Item  style={styles.itemStyle}>
                  <Label style={styles.customLabel}>Confirm New Password</Label>
                  <Input
                        style={styles.inputBox2}
                        value={this.state.cnew_pass}
                        onChangeText={(cnew_pass)=> this.setState({cnew_pass})}
                        autoCapitalize='none'
                        secureTextEntry={true}
                  />
                </Item>
                <Button 
                  style={styles.btnStyle}
                  onPress={this.handleCP}
                  >
                  <Text style={{ color: "#fff", fontSize: hp('2%') }}>Update Password</Text>
                </Button > 
              </Form>
                
            </Content>
          

          <Footer style={{backgroundColor: "#8fbb2d",height: hp('7%')}}>
            <FooterTab style={{ backgroundColor: "#8fbb2d"}}>
              <Button full
                    onPress={this.goBack}
              >
                  <Left>
                    <Icon name="ios-arrow-back" style={{ color: "#fff", fontSize: hp('3%') }}>
                    <Text style={{ color: "#fff", fontSize: hp('3%') }}>   Back</Text></Icon>
                  </Left>
              </Button>
            </FooterTab>
            </Footer>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        height: hp('86%'),
      
      },
      itemStyle: {
        
        borderColor: '#8fbb2d',
        borderBottomWidth: wp('0.5%'),
        
      },
      btnStyle: {
        marginTop:hp('5.25%'), 
        width: wp('50%'),
        justifyContent:"center",
        alignSelf: "center",
        backgroundColor:"#8fbb2d",
        borderRadius: hp('5%')
      },
      customLabel: {
          marginRight: wp('2.5%')
      }
        
    });


  

export default ChangePasswordScreen;

