// import React from 'react'
// import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
// import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content, Radio, Label , Input, Thumbnail} from 'native-base';
// import {Actions} from 'react-native-router-flux';
// import Dots from 'react-native-dots-pagination';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// class TravelDetails extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state =({
//           active: 2,
//           km:'',
//           modalVisibility: false,
//           modalText: "Please enter the total number of kms that you travel on daily basis from your home and back.",
//           modalVisibility2: false,
//           modalText2: "Please Enter a value \"Greater than Zero.\" "
//         });
//       }

//       componentDidMount() {
//         AsyncStorage.getItem("kilometers").then(value => {
//             if(value==null){
//                     console.log("First Time")
//                     console.log(value)
//             }
//             else{
//                 console.log("First Already Done")
//                 AsyncStorage.setItem(
//                     'kilometers',
//                     value);
//                 console.log(value)
//                 console.log(this.state.km)
//                 this.state.km=value;
//                 console.log(this.state.km)
//             }
//         })
//     } 
    

//     backButton(){
//       console.log("Front Button")
//         const num = Number(this.state.km);
//         if(num >= 0 ){
//         console.log("Back Button")
//         AsyncStorage.setItem(
//             'kilometers',
//             this.state.km);
//             AsyncStorage.getItem("kilometers").then(value => {
//                 console.log(value)} );}
//                 else{
//                   this.showInfoModal2(true);
//                   console.log("Wrong Input");
                 
//                 }
//     }
//     frontButton(){
//       console.log("Front Button")
//         const num = Number(this.state.km);
//         if(num >= 0 ){
//         console.log("Front Button")
//         AsyncStorage.setItem(
//             'kilometers',
//             this.state.km);
//         AsyncStorage.getItem("kilometers").then(value => {
//             console.log(value)} );}
//             else{
//               this.showInfoModal2(true);
//               console.log("Wrong Input");
             
//             }
//     }
//     showInfoModal = (val) =>{
//       this.setState({
//           modalVisibility: val
//       })

//   }
//   showInfoModal2 = (val) =>{
//     this.setState({
//         modalVisibility2: val
//     })

// }
// 	render() {
// 		return (
// 			<Root>
//       <Container  style={[styles.container, this.state.modalVisibility||this.state.modalVisibility2 ? {opacity: 0.5} :'' ]}>

//       <Header transparent style={{ backgroundColor: "white" }}>
          
//           <Left>
//           <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
//           onPress= {() => {console.log("Left Button") }}> 
         
//          <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
//                                             source={require('../../util/images/person_icon.png')}
//                                 />
        
        
//           </Button>
      
//           </Left>

//           <Right >
//           <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
//           onPress= {() => {this.showInfoModal(true) }}> 
          
//           <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
//                                     source={require('../../util/images/info_icon.png')}
//                                 />
        
//           </Button>
      
//           </Right>

//       </Header>

      
//         <Image
//                 style={{width: wp('95%'), height: hp('35%'), resizeMode: "contain", alignItems:"center", justifyContent: "center", start:wp('2.5%')}}
// 				source={require('../../util/images/Journey_Time1_WFI.png')}
//         />
    
        
//         <Text style={{fontSize:hp('4.5%'),fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-3.5%'),paddingTop:hp('2.5%')}}>
//         Journey Time
//         </Text>
//         <Text style={{fontSize:hp('2.5%'), alignSelf: "center",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('7%'), top:hp('-3.5%')}}>
//         Enter the number of kilometers travelled per day
//         </Text>
//         <Input
//                 style={styles.inputBox}
//                 value={this.state.km}
//                 onChangeText={(km)=> this.setState({km})}
//                 placeholder={"Kilometers"} 
// 				autoCapitalize='none'
//                 keyboardType = 'numeric'>
//         </Input>
        
        
//         <Footer  style={{backgroundColor: "#white" ,display:"flex",top:hp("15%")  }}>
      
// 		<Body>

//         <Left style={{left:wp('5%'), top:hp('0%')}}>
//           <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
//               onPress= {() => {this.backButton()}}> 
//               <Icon name='arrow-back' style={{ color: "#99cc00"}} /> 
//             <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Back</Text> 
            
//             </Button>
//            </Left>
//            <View style={{left:wp('2.5%'), top:hp('0.5%')}}>
//             <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
//            </View>

//           <Right style={{start:wp('10%')}}>
//            <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
//               onPress= {() => {this.frontButton() }}> 
              
//             <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Next</Text> 
//             <Icon name='arrow-forward' style={{ color: "#99cc00"}} /> 
//             </Button>
//             </Right>
//           </Body>
      
// 			</Footer>
//       <View style={{  flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#white' }}>
//           <Modal
//             transparent={true}
//             animationType={'slide'}
//             visible={this.state.modalVisibility}
//             onRequestClose={ () =>{
//                 this.showInfoModal(!this.state.modalVisibility)
//              }}
//           >
               
//           <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
//             <View style={styles.modalInsideView}>
//             <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText}</Text>
//             <Button transparent title="Close" onPress={() => { this.showInfoModal(!this.state.modalVisibility)} }>
//              <Text style={{fontSize:hp('3.5%'), fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", fontWeight: "600", top: hp('2%')}}>Close</Text>
//            </Button>
//           </View>
//          </View>
//      </Modal>
//     </View>

//     <View style={{  flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#white' }}>
//           <Modal
//             transparent={true}
//             animationType={'slide'}
//             visible={this.state.modalVisibility2}
//             onRequestClose={ () =>{
//                 this.showInfoModal2(!this.state.modalVisibility2)
//              }}
//           >
               
//           <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
//             <View style={styles.modalInsideView2}>
//             <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText2}</Text>
//             <Button transparent title="Close" onPress={() => { this.showInfoModal2(!this.state.modalVisibility2)} }>
//              <Text style={{fontSize:hp('3.5%'), fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", fontWeight: "600", top: hp('2%')}}>Close</Text>
//            </Button>
//           </View>
//          </View>
//      </Modal>
//     </View>


//     </Container>
//     </Root>
// 		)
//     }
// }


// const styles = {
//   container: {
// },

// modalInsideView:{
//     justifyContent: 'center',
//     alignItems: 'center', 
//     backgroundColor : "white", 
//     height: hp('40%') ,
//     width: wp('95%'),
//     borderRadius:hp('4%'),
//     borderWidth: hp('1%'),
//     borderColor: '#8fbb2d',
   
// },
// modalInsideView2:{
//   justifyContent: 'center',
//   alignItems: 'center', 
//   backgroundColor : "white", 
//   height: hp('40%') ,
//   width: wp('95%'),
//   borderRadius:hp('4%'),
//   borderWidth: hp('1%'),
//   borderColor: '#8fbb2d',
//  top: hp("20%")
// },
// inputBox: {
//     width: wp('60%'),
//     maxHeight: hp('7.5%'),
// 	borderColor: '#8fbb2d',
//     borderWidth: 5,
// 	borderAlign: 'center',
//     textAlign: "center",
//     alignSelf: "center",
//     borderRadius: 30,
//     fontSize: hp('3%'),
//     fontWeight:"bold"
//   },
// }

// export default TravelDetails;

import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

class TravelDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          username:'',
          password:'',
          active: 5,
          placeholder:'',
          modalVisibility: true,
          });
      }  
      SurveyI() {
     
          
   
        Actions.SurveyI()
      }
      showInfoModal = (val) =>{
        
              this.setState({
                  modalVisibility: val
              })
              
              Actions.SurveyI()
          }

  render() {
    return (
    <Container>
    <View>
        <Text style={{justifyContent: 'center', fontSize: hp('4%'), start:wp("25%"), top: hp('4%')}}> Ministry of XYZ</Text>
        <Text style={{justifyContent: 'center', alignItems: 'center',fontSize: hp('3%'),start:wp("22.5%"), top: hp('4%')}}> An app for GOV of India</Text>
    </View>
<View style={{top:hp("6%"), height:hp("0.1%")}}>
    <LinearGradient colors={['#6dd660', '#46c595',"#25b6bf","#57c3ee"]} style={styles.linearGradient} start={{ x: 0, y: 0 }}>
  <Text style={styles.buttonText}>
  </Text>
</LinearGradient>
</View>

<Text style={{justifyContent: 'center', alignItems: 'center',fontSize: hp('4%'),start:wp("7.5%"), top: hp('10%')}}> Census Enumeration 2020</Text>

<View style={{top:hp("40%"), height:hp("150%"), width:(wp("100%"))}}>
    <LinearGradient colors={['#6dd660','#6dd660',"#57c3ee", "blue"]} style={styles.linearGradient2} start={{ x: -0.5, y: -0.50 }}>
  <Text style={styles.buttonText}>
  </Text>
</LinearGradient>
</View>
<View style={{  flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#white' }}>
          <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.state.modalVisibility}
            onRequestClose={ () =>{
                this.showInfoModal(!this.state.modalVisibility)
             }}
          >   
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', top:hp("5%")}}>
            <View style={styles.modalInsideView}>

            <Icon name='person' style={{ color: "#57c3ee", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} ></Icon> 
            <View style={{paddingTop:hp("8%")}}>
            <Input
						value={this.state.username}
						onChangeText={(username)=>this.setState({username})}
						style={styles.inputBox2}
            placeholder={"Username"} 
            placeholderTextColor = "#b9b9b9"
						autoCapitalize='none'
					/>
          </View>
          <View style={{paddingTop:hp("3%")}}>
					<Input
						value={this.state.password}
						onChangeText={(password)=>this.setState({password})}
						style={styles.inputBox2}
						secureTextEntry={true}
            placeholder={"Password"} 
            placeholderTextColor = "#b9b9b9"
						autoCapitalize='none'
					/>
          </View>
          <Button
          onPress={() => {this.showInfoModal(false) }}
          style={styles.button1}><Text style={{ color: "#57c3ee", fontSize: 20, textAlign:'center', alignSelf:'center', start:wp("12.5%") }}>Login</Text></Button >

          </View>
         </View>
         
     </Modal>
    </View>

    
     


 </Container>
    )
  }
}
const styles = StyleSheet.create({
  oval: {
    top: hp('60%'),
    width: wp('150%'),
    height:hp('150%'),
    borderRadius: 50,
   
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 1
  },
  linearGradient2: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 150
  },
  modalInsideView:{
    
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor : "white", 
    height: hp('40%') ,
    width: wp('95%'),
    borderRadius:hp('4%'),
   
},
inputBox2: {
    width: wp('70%'),
    maxHeight: hp('7.5%'),
	  borderColor: '#D3D3D3',
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 30,
    fontSize: hp('3%'),
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
   // borderRadius: 100,
    // height: 200,
    // width: 350,
  },
  button1: {
    alignSelf: 'center',
    marginTop: 55,
    marginBottom: 25,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:"#cccccc",
    borderRadius: 20,
    width: 150,
    textAlign: 'center'
  

  },
  modalInsideView:{
    top:hp("5%"),
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor : "white", 
    height: hp('60%') ,
    width: wp('80%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 1,
    elevation: 2,
    borderRadius:hp('3.5%'),
    // borderWidth: hp('0.2%'),
    // borderColor: '#e5e8eb',
   
}
});
export default TravelDetails;

