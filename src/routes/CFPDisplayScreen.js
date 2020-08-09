
import React, {Component} from "react"
import { View, Text, StyleSheet, Dimensions, Modal,AsyncStorage} from "react-native"
import { Actions } from "react-native-router-flux";
import {Container, Content,Header, Item, Input, Icon,Form,Thumbnail, Footer,Button, FooterTab} from 'native-base'
import CFPCalculation from "./CFPCalculation"
import PropTypes from 'prop-types'
import { firebaseApp,firestoreDB } from "../../util/Firebase";
//import "@firebase/firestore"
import {GoogleSignin} from "@react-native-community/google-signin"
import {WEB_CLIENT_ID} from "react-native-dotenv"
import FBSDK from 'react-native-fbsdk';
const { LoginManager } = FBSDK
import { YellowBox } from 'react-native';
import Fight from "../routes/FlightDetails"
import Travel from "../routes/TravelDetails"
class CFPDisplayScreen extends Component {

    static propTypes = {
        dName: PropTypes.string
    }

    constructor(props){
        super(props)

        this.state = {
            usrName: '',
            isGLoggedIn: false,
            isELoggedIn: false,
            modalVisibility: false,
            modalText: "Estimations are based on research by scientists and advisors at ICCE. The algorithms have been created to the best of our abilities. \n (They may not be taken as exact predictions). \n\n To find out more behind these numbers, please write to us at",
            modalInfoEmail: 'info@ic-ce.com'
        }
        
        YellowBox.ignoreWarnings(['Setting a timer']);
        
    }

    componentDidMount(){
     
           const user =  firebaseApp.auth().currentUser
     
            console.log("User : "+user.displayName)
            this.setState({usrName: user.displayName})
             
         
    }

    

    showInfoModal = (val) =>{
        this.setState({
            modalVisibility: val
        })

    }

    render(){
        return(

            // <Container  style={[styles.container, this.state.modalVisibility ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '']}>
            //      <Header  style={styles.headerStyle} >

            //     </Header>
            //     <Content>
                   
            //         <Text style={{fontFamily: 'Arial', fontSize: 23,paddingLeft: 10}}>
            //             Hi {this.state.usrName},
            //         </Text>
            //         <CFPCalculation />
            //         <View style={{  flex:1,justifyContent: 'center', alignItems: 'center' }}>
            //                 <Modal
            //                     transparent={true}
            //                     animationType={'slide'}
            //                     visible={this.state.modalVisibility}
            //                     onRequestClose={ () =>{
            //                         this.showInfoModal(!this.state.modalVisibility)
            //                     }}
            //                     style={{}}
            //                 >   
            //                     <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
            //                         <View style={styles.modalInsideView}>
            //                             <Text style={{fontSize:20,fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText}</Text>
            //                             <Text style={{fontSize:20, fontFamily:'Arial',textAlign: "center", color:"#8fbb2d",}}>{this.state.modalInfoEmail}</Text>
            //                             <Button transparent title="Got it!" onPress={() => { this.showInfoModal(!this.state.modalVisibility)} }>
            //                                 <Text style={{fontSize:20, fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", marginTop: 30,fontWeight: "600"}}>Got it!</Text>
            //                             </Button>
 
            //                         </View>

            //                     </View>
            //                 </Modal>
            //         </View>
                        
                <Travel/>
                    
            //     </Content>
            //     <Footer  style={styles.footerStyle}>
            //         <FooterTab style={styles.footerTabStyle}>
            //             <Button transparent
            //                 onPress={() => {
            //                     Actions.travelcategory(); }}
            //             >
            //                 <Icon name='ios-arrow-back' 
            //                     style={{width:null, fontSize: 34, color:'white'}}
            //                 />
            //             </Button>
            //             <Button transparent onPress={() => {
            //                  this.showInfoModal(true) }}
            //                  >
            //                 <Thumbnail source={require('../../util/images/info_image.png')} 
            //                     style={{width: 30, height: 30,}}
            //                 />
            //             </Button>

            //             <Button transparent 
            //                 onPress={() => {
            //                     Actions.drawerOpen(); }}
                        
            //             >
            //                 <Thumbnail source={require('../../util/images/person_image.png')} 
            //                     style={{width: 30, height: 30,}}
            //                 />
            //             </Button>
                        
            //             <Button transparent>
            //                 <Icon name='ios-arrow-forward' 
            //                     onPress = {()=> {console.log("Next Button clicked")}} 
            //                     style={{width:null, fontSize: 34, color:'white'}}/>
            //             </Button>
                        

            //         </FooterTab>
            //     </Footer>   
            // </Container>
            
        );
    }

}

let scrHeight = Dimensions.get('window').height
let scrWidth = Dimensions.get('window').width

const styles = StyleSheet.create(
    {
        container: {
            //flex: 1,
            height: scrHeight,
            width: scrWidth,
            backgroundColor: "#fff"
          
        },
        loginBtnStyle:{
            margin:10, 
            marginTop: 20,
            justifyContent: "center", 
            backgroundColor:"#8fbb2d"
        },
        loginBtnTxtStyle:{
            color: "white",
            fontSize:20,
            fontWeight: "bold",
            fontFamily:"Arial" 
        },
        signupBtnStyle: {
            margin:10, 
            justifyContent: "center"
        },
        signupBtnTxtStyle: {
            color: "black",
            fontSize:20,
            fontWeight: "bold",
            fontFamily:"Arial"  
        },
        fbBtnStyle:{
            margin:7, 
            width: 150,
            height: 50,
            justifyContent: "center", 
            backgroundColor: "white"
            
        },
        fbBtnTxtStyle:{
            margin: 5,
            color: "black",
            fontSize:20,
            fontFamily:"Arial" 
        },
        headerStyle: {
            //flex:1, 
            height: 60, 
            width: scrWidth,
            backgroundColor: "#8fbb2d"
        },
        footerStyle:{
            //flex:1,
             height: 60, 
             width: scrWidth,
             backgroundColor: "#8fbb2d"
        },
        footerTabStyle:{
            
             backgroundColor: "#8fbb2d"
        },
        modalInsideView:{
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor : "white", 
            height: '55%' ,
            width: '90%',
            borderRadius:20,
            borderWidth: 7,
            borderColor: '#8fbb2d',
           
        }

    }
) 

export default CFPDisplayScreen;
