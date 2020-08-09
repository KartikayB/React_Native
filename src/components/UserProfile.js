import React from "react"
import {View, Text, StyleSheet,AsyncStorage } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'
import {Actions} from 'react-native-router-flux'
import {Button,Icon,Container,Content,Header,Footer,Item,Label,Thumbnail, List,ListItem,Body,Left,Right} from 'native-base'
import PropTypes from 'prop-types'
import { firebaseApp,firestoreDB} from "../../util/Firebase";
import {GoogleSignin} from "@react-native-community/google-signin"
import {WEB_CLIENT_ID} from "react-native-dotenv"
import FBSDK from 'react-native-fbsdk';
const { LoginManager } = FBSDK

class UserProfile extends React.Component{
    static propTypes = {
        dName: PropTypes.string,
        email: PropTypes.string,
    }

    constructor(props){
        super(props)
        
            this.state = {
                dName : '',
                email: ''
            }
    
       

    }

    componentDidMount(){
            
         //initial configuration
         GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
           
            // Replace with your webClientId generated from Google API/Firebase console
            webClientId: WEB_CLIENT_ID
            })

        const user =  firebaseApp.auth().currentUser
 
        console.log("User : "+user.displayName)
        this.setState({
            dName : user.displayName, 
            email: user.email
         })
    }


    //Helper Method the Signout the User from the App
    async logout(){

        //Remove Google  user session from the device.
        try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            if (isSignedIn){
                await GoogleSignin.revokeAccess();
                await GoogleSignin.signOut();
                
            }
        }catch (error) {
            console.error(error)
        }


       LoginManager.logOut() // Facebook User Logout - react-native-fbsdk

       await firebaseApp.auth().signOut() // User signed out from Firebase
        .then(()=>{
          
            console.log("User logged out from Firebase")
        })
        .catch(error => console.log(error))

        //For Demo purpose - remove the item - set after first launch 
        // Remove the below line in Production
        AsyncStorage.removeItem('appLaunched', (err) => console.log('appLaunched', err));
 
        Actions.login(); // navigate to Login Screen after Logging out
  
     
    }


    render(){
        return(
            <Container style={styles.menuStyle}>
                <Header style={styles.headerStyle} />
                <Content>
                    <View >
                        <Text style={styles.menuTitle}>User Profile</Text>
                    </View>
                   
                    <List>
                        <ListItem style={styles.itemStyle}>
                            <Thumbnail  source={require('../../util/images/person_icon.png')} style={styles.iconStyle} />
                            <Label style={styles.menuTxtL}>Name</Label>
                            <Label style={styles.menuTxt}>{this.state.dName}</Label>
                        </ListItem>
                        <ListItem  style={styles.itemStyle}>
                            <Thumbnail  square source={require('../../util/images/profile_email.png')} style={styles.iconStyle}/>
                            <Label style={styles.menuTxtL}>Email</Label>
                            <Label  style={styles.menuTxt}>{this.state.email}</Label>
                        </ListItem>
                       
                        <ListItem noBorder style={{marginLeft: wp('2%'),marginTop: hp('3.5%')}} >
                            <Left>
                                <Thumbnail  square source={require('../../util/images/change_pwd_icon.png')}  style={styles.linkIcon} />
                                <Text style={styles.linkText}>Change Password</Text>
                            </Left>
                            
                            <Right>
                                <Icon  name='ios-arrow-forward' style={styles.arrowStyle}
                                    onPress={()=> {Actions.changepwd();}}
                                />
                            </Right>
                        </ListItem>
                        <ListItem noBorder style={{marginLeft: wp('2%'),marginTop:hp('3.5%') }}>
                            <Left>
                                <Thumbnail  square source={require('../../util/images/details_icon.png')}  style={styles.linkIcon} />
                                <Text style={styles.linkText}>Details</Text>
                            </Left>
                            
                            <Right>
                                <Icon  name='ios-arrow-forward' style={styles.arrowStyle}
                                    onPress={()=> {Actions.travelcategory();}}
                                />
                            </Right>
                        </ListItem>
                        <ListItem noBorder style={{marginLeft: wp('2%'),marginTop:hp('3.5%') }}>
                            <Left>
                                <Thumbnail  square source={require('../../util/images/logout_icon.png')}  style={styles.linkIcon} />
                                <Text style={styles.linkText}>Logout</Text>
                            </Left>
                            
                            <Right>
                                <Icon  name='ios-arrow-forward' style={styles.arrowStyle}
                                    onPress={()=>{
                                        this.logout();
                                    }}
                                />
                            </Right>
                        </ListItem>
                    </List>
                   
                    
                </Content> 
                <Footer style={styles.footerStyle}/>
               
               
            </Container>
        )
    }
}

export default UserProfile;

const styles= StyleSheet.create({
    menuStyle:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
        width: wp('68%')
        
    },
    headerStyle: {
                
        height: hp('9%'), 
        width: wp('68%'),
        backgroundColor: "#8fbb2d",
       // marginTop: hp('2%')

    },
    footerStyle:{
          width: wp('68%'),
          height: hp('8%'), 
         backgroundColor: "#8fbb2d"
    },
    menuTitle:{
        marginTop: hp('2.5%'),
        fontSize: hp('3.25%'),
        alignSelf: 'center',
        
    },
    
      itemStyle: {
        
        borderColor: '#8fbb2d',
        borderBottomWidth: wp('0.5%'),
        marginBottom: hp('0.4%'),
        marginLeft: wp('1.25%'),
        marginTop: hp('3%'),
        marginRight: wp('1.5%')
        
      },
      iconStyle:{
        width: wp('6%'), 
        height:  hp('4%'), 
     
      },

    menuTxtL:{
        fontSize: hp('2.25%'),
       marginLeft: wp('1%'),
        fontWeight: 'bold'
    },
    menuTxt:{
        fontSize: hp('2%'),
        marginLeft: wp('1.5%'),
      
    },
    linkIcon:{
        width: wp('7%'), 
        height:  hp('5%'), 
     
      },
    linkText:{
        fontSize: hp('3%'),
        marginLeft: wp('2%'),
    },
    arrowStyle:{
        fontSize:hp('4%'),
        color: "#8fbb2d",
    }

})

