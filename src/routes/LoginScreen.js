import React, {Component} from "react"
import { View, Text, StyleSheet ,Image,ImageBackground} from "react-native"
import {Container, Content,Header, Item, Input, Icon,Form,Thumbnail, Footer,Button} from 'native-base'
import { Actions } from "react-native-router-flux"
import * as firebase from "firebase"
import "@firebase/firestore"
import {firebaseApp,firestoreDB} from '../../util/Firebase'
import {GoogleSignin, statusCodes} from "@react-native-community/google-signin"
import {WEB_CLIENT_ID, ANDROID_CLIENT_ID} from "react-native-dotenv"
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { YellowBox } from 'react-native';
//import {StoreUserDetails} from "./StoreUserDetails"

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
  AccessToken,
} = FBSDK;

const logo_img = require('../../util/images/logo.png')
const bkg_img = require('../../util/images/login_background_image.png')




class LoginScreen extends Component{


    constructor(props)
    {   super(props)
        this.state = {
            
            userInfo: '',
            usrFName: '',
            usrLName: '',
            usrEmail: '',
            usrPwd: '',
            usrProviderId: '',
            isLoggedIn: false,
        }
        
        //this.dbRef = firebaseApp.firestore()
               
        this.signInEmailPwd = this.signInEmailPwd.bind(this)

        YellowBox.ignoreWarnings(['Setting a timer']);

    }

    componentDidMount(){
        
            lor(this); // landscape orientation - responsive screen
  
        //initial configuration
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            
            // Replace with your webClientId generated from Google API/Firebase console
            webClientId: WEB_CLIENT_ID,
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            })

        firebaseApp.auth().onAuthStateChanged( result =>{
            if (result){
                const user =  firebaseApp.auth().currentUser
                this.setState({ isLoggedIn: true})
                console.log("User : "+ user.displayName)

                Actions.usercategory({dName: user.displayName});
            }
            else{
                this.isSignedIn()
            }
            
        })
    }

    componentWillUnmount() {
        rol();
      }

  isSignedIn = async () => {


        const isGSignedIn = await GoogleSignin.isSignedIn();
        const fbTok = FBSDK.AccessToken.getCurrentAccessToken()


        if (isGSignedIn) {
         console.log('Google User is already signed in')
         this.setState({ isLoggedIn: false });
          //navigate to CFP Display page
            Actions.cfpdisplay('');
        }else {
          console.log('Please Login');
        }
     
  }

  async signInEmailPwd()
    {
        if (!this.checkFields()){
            alert("All fields are mandatory")
            return false
        }
        
        firebaseApp.auth().signInWithEmailAndPassword(
            this.state.usrEmail, this.state.usrPwd
        ).then(result =>{
            console.log(result)
            console.log("Provider :"+result.additionalUserInfo.providerId)
            console.log("Provider User Name:"+result.additionalUserInfo.username)
            this.setState({isLoggedIn :true}) // LoggedIn state - set to true
            Actions.usercategory({dName: result.user.displayName});
        }).catch(error =>{
            alert(error)
        })
    }

    checkFields(){
        const {usrEmail,usrPwd, rpassword,firstname,lastname} = this.state
        
        if(usrEmail !== '' || usrPwd !==''){
            return true;
        }
            
        return false;
    }

    signInGoogle = async () =>
    { 

            //Prompts a modal to let the user sign in into your application.
            try {

             
                await GoogleSignin.hasPlayServices({
                //Check if device has Google Play Services installed.
                //Always resolves to true on iOS.
                showPlayServicesUpdateDialog: true,
                });
                const userInfo = await GoogleSignin.signIn();
                console.log('User Info --> from sign in ', userInfo);

                //this.setState({ userInfo: userInfo });
                

                //Get firebase credential using idToken of the signed in Google User
                
                const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken);
                            
                //and then log into firebase using that credential

                firebaseApp.auth().signInWithCredential(credential).then(result =>{

                    console.log(result) //FirebaseUser object values
                    console.log("Firebase USer Object :"+result.additionalUserInfo)
                    console.log("Provider :"+result.additionalUserInfo.providerId)
                    console.log("Google  User logged In :" +result.user.displayName )
                    console.log("result.additionalUserInfo.profile.given_name " + result.additionalUserInfo.profile.given_name)
                   
                   
                    this.updateStateValuewithGoogle(result)
                    
                    if (result.additionalUserInfo.isNewUser){
                      
                       this.handleUserData(result.user.uid)

                    } 
                     Actions.usercategory({dName: result.user.displayName});
                  
                }).catch(error =>{
                    alert(error)
                })
            }catch (error) {
                console.log('Message', error.message);
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                  console.log('User Cancelled the Login Flow');
                } else if (error.code === statusCodes.IN_PROGRESS) {
                  console.log('Signing In');
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                  console.log('Play Services Not Available or Outdated');
                } else {
                  console.log('Some Other Error Happened');
                }
            }

      }


      facebookLogin = async () =>
      {
                LoginManager.setLoginBehavior('WEB_ONLY');
          
                await LoginManager.logInWithPermissions(['public_profile',  'email'])
                  .then(
                      (result) => {
                      if (result.isCancelled) {
                        alert('Whoops!', 'You cancelled the Facebook sign in.');
                      } else {
                        
                        console.log("FB Login Result :"+result)
                        AccessToken.getCurrentAccessToken() // Get the Accesstoken of the Logged in user
                          .then((data) => {
                            
                            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                            firebaseApp.auth().signInWithCredential(credential)
                              .then(result => {

                                console.log(result)
                                console.log("Firebase USer Object :"+result.additionalUserInfo.username)
                                console.log("Provider :"+result.additionalUserInfo.providerId)
                                console.log("FB User logged In :" + result.user.displayName)
                                console.log("Provider :"+result.additionalUserInfo.providerId)

                                
                                
                                this.updateStateValuewithFacebook(result)
                                
                                // If New User store the Details in the Firestore
                                if (result.additionalUserInfo.isNewUser){
                                  this.handleUserData(result.user.uid)
                                }
                                
                                Actions.usercategory({dName: result.user.displayName});
                              }).catch((error) => {
                                console.log("Login Failed "+error)
                              });
                          });
                      }
                    },
                    (error) => {
                      alert('Sign in error', error);
                    }

                )
          
      }

   
      updateStateValuewithGoogle(result)
      {
        this.setState({
          usrFName: result.additionalUserInfo.profile.given_name,
          usrLName: result.additionalUserInfo.profile.family_name,
          usrEmail: result.user.email,
          usrProviderId: result.additionalUserInfo.providerId
 
        })
        
        
      }

      updateStateValuewithFacebook(result)
      {
        this.setState({
          usrFName: result.additionalUserInfo.profile.first_name,
          usrLName: result.additionalUserInfo.profile.last_name,
          usrEmail: result.user.email,
          usrProviderId: result.additionalUserInfo.providerId
 
        })
      }


      handleUserData =  async (usrId) => 
      {
    
       
        var docRef = firebaseApp.firestore().collection("users");

        const usrDet = {
                          usrID: usrId,
                          usrFName: this.state.usrFName,
                          usrLName: this.state.usrLName,
                          usrProviderId: this.state.usrProviderId,
                          cpfVal: false
                        }
                    
                docRef.doc(usrId)
                        .set(usrDet)
                        .then(()=> console.log("Success"))
                        .catch(error => console.log("Error ",error))
   
      }

render(){

    //Styles included in render() method - to support responsiveness along with orientation change.
    const styles = StyleSheet.create(
        {
            container: {
                flex: 1,
                
            },
            loginBtnStyle:{
                margin:wp('2%'), 
                marginTop: hp('5%'),
                justifyContent: "center", 
                backgroundColor:"#8fbb2d"
            },
            loginBtnTxtStyle:{
                color: "white",
                fontSize:hp('3.5%'),
                fontFamily:"Arial" 
            },
            signupBtnStyle: {
                margin:wp('2%'), 
                marginTop:hp('3%'), 
                justifyContent: "center"
            },
            signupBtnTxtStyle: {
                color: "black",
                fontSize:hp('3.5%'), //font Size 20
              fontFamily:"Arial"  
            },
            fbBtnStyle:{
                margin:wp('1.5%'), 
                width: wp('42%'),
                height: hp('8.75%'), //fontSize 50
                justifyContent: "center", 
                backgroundColor: "white"
                
            },
            fbBtnTxtStyle:{
                margin: wp('1.5%'),
                color: "black",
                fontSize:hp('3%'),
                fontFamily:"Arial" 
            },
            headerStyle: {
                
                height: hp('9%'), 
                width: wp('100%'),
                backgroundColor: "#8fbb2d",
               // marginTop: hp('2%')

            },
            footerStyle:{
                  width: wp('100%'),
                  height: hp('8%'), 
                 backgroundColor: "#8fbb2d"
            }
    
        }
    ) 

    //Styles included in render() method - to support responsiveness along with orientation change.
        return(
            <Container style={styles.container}>
                <Header style={styles.headerStyle} />
                <Content style={{height: hp('88%'), width: wp('100%')}}>
                    
                    <ImageBackground source={bkg_img}  style={{
                        flex: 1,
                        resizeMode: "cover",
                        
                      }} >
                          
                        <Image source={logo_img} style={{width:wp('100%'), height: hp('26%'), resizeMode: "contain"}} />
                    
                        <Form style={{ width :wp('70%'), height: hp('40%'), alignSelf: "center" }}>

                                <Item success>
                                    <Thumbnail square source={require('../../util/images/login_email.png')} style={{width: wp('5.5%'), height:  hp('3.5%')}}/> 
                                    <Input
                                        keyboardType="email-address" 
                                        value={this.state.usrEmail}
                                        onChangeText={ (text) => this.setState( {usrEmail: text} ) }
                                        
                                    />
                                </Item>
                                <Item success>
                                    <Thumbnail square source={require('../../util/images/login_pwd.png')} style={{width: wp('6%'), height:  hp('3.5%')}} /> 
                                    <Input
                                        secureTextEntry={true}
                                        value={this.state.usrPwd}
                                        onChangeText={ (text) => this.setState( {usrPwd: text} )}
                                    />
                                </Item>
                                <Button  rounded success style={styles.loginBtnStyle}
                                        onPress={ ()=>{
                                            if(
                                                this.state.usrEmail != null && 
                                                this.state.usrPwd != null
                                            ){
                                                this.signInEmailPwd()
                                            }else{
                                                alert("Email & Password fields cannnot be Empty")
                                            }
                                        }}
                                >
                                    <Text style={styles.loginBtnTxtStyle}>Login</Text>
                                </Button>
                                <Button  rounded bordered  success style={styles.signupBtnStyle}
                                        onPress={() => {
                                            Actions.signup();
                                        }}
                                >
                                    <Text style={styles.signupBtnTxtStyle}>Sign Up</Text>
                                </Button>
                                
                        </Form>
                        <Form style={{ width :wp('100%'), height: hp('16.5%'), alignSelf: "center" }} >
                            <View style={{flexDirection: 'row',backgroundColor: "#C7F1C5420"}}> 
                                <View style={{backgroundColor: '#8fbb2d', height: 2, flex: 1, alignSelf: 'center'}} /> 
                                        <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: hp('3%'), backgroundColor:  '#C7F1C540',color:'black'}}>or continue with</Text> 
                                <View style={{backgroundColor: '#8fbb2d', height: 2, flex: 1, alignSelf: 'center'}} />
                            </View>
                            <View style={{flexDirection: 'row', alignContent:"center", justifyContent:"center"}}>
                                <Button rounded style={styles.fbBtnStyle}
                                     onPress={ this.facebookLogin}
                                    
                                >
                                    <Thumbnail  source={require('../../util/images/facebook.png')} style={{width: wp('8%'), height: hp('5%')}} />
                                    <Text style={styles.fbBtnTxtStyle}>Facebook</Text>
                                </Button>
                                <Button rounded style={styles.fbBtnStyle}
                                     onPress={ ()=>{                                      
                                        this.signInGoogle()
                                        
                                    }}
                                >
                                    <Thumbnail source={require('../../util/images/google.png')} style={{width: wp('8%'), height: hp('5%')}} />
                                    <Text style={styles.fbBtnTxtStyle}>Google</Text>
                                </Button>
                            </View>
                            
                        </Form>
                    </ImageBackground>
                    
                </Content>
                <Footer style={styles.footerStyle}>
                        <Button transparent
                            onPress={ ()=>{
                              Actions.forgotpwd();
                            }}
                        >
                          <Text style={{ alignSelf:'center', paddingHorizontal:wp('1.5%'), fontSize: hp('2.5%'),color: "white",margin: hp('1.5%') }}>Forgot Password?</Text> 
                        </Button>
                    </Footer>
            </Container>

        );
    }
}




export default LoginScreen;

