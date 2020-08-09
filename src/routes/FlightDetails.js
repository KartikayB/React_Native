import React from 'react'
import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content, Radio, Label , Input, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class FlightDetails extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =({
          active: 5,
          placeholder:'',
          fli:'',
          modalVisibility: false,
          modalText: "Both long and short flights cause C-emissions. List the number of flights that you take per year for your personal or official purposes.",
          modalVisibility2: false,
          modalText2: "Please Enter a \"Postive Integer value.\" "

        });
      }

      componentDidMount() {
        AsyncStorage.getItem("flights").then(value => {
            if(value==null){
                    console.log("First Time")
                    console.log(value)
            }
            else{
                console.log("First Already Done")
                AsyncStorage.setItem(
                    'flights',
                    value);
                console.log(value)
                console.log(this.state.fli)
                this.state.fli=value;
                console.log(this.state.fli)
                console.log(this.state.placeholder)
                this.state.placeholder=value;
            }
        })
    } 
    

    backButton(){
        console.log("Back Button")
        const num = Number(this.state.fli);
        if(Number.isInteger(num)  &&  num >= 0 ){
        AsyncStorage.setItem(
            'flights',
            this.state.fli);
            AsyncStorage.getItem("flights").then(value => {
                console.log(value)} );}
        else{
            this.showInfoModal2(true);
            console.log("Wrong Input");
            
         }
    }
    frontButton(){
        console.log("Front Button")
        const num = Number(this.state.fli);
        if(Number.isInteger(num)  &&  num >= 0 ){
        AsyncStorage.setItem(
            'flights',
            this.state.fli);
        AsyncStorage.getItem("flights").then(value => {
            console.log(value)} );}
            else{
              this.showInfoModal2(true);
              console.log("Wrong Input");
             
            }
    }
    showInfoModal = (val) =>{
      this.setState({
          modalVisibility: val
      })

  }
  showInfoModal2 = (val) =>{
    this.setState({
        modalVisibility2: val
    })

}
	render() {
		return (
			<Root>
      <Container  style={[styles.container, this.state.modalVisibility||this.state.modalVisibility2 ? {opacity: 0.5} :'' ]}>

      <Header transparent style={{ backgroundColor: "white" }}>
          
          <Left>
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
          onPress= {() => {console.log("Left Button") }}> 
         
         <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
                                            source={require('../../util/images/person_icon.png')}
                                />
        
          </Button>
      
          </Left>

          <Right >
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
          onPress= {() => {this.showInfoModal(true) }}> 
          
          <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
                                    source={require('../../util/images/info_icon.png')}
                                />
        
          </Button>
      
          </Right>

      </Header>

      
        <Image
                style={{width: wp('95%'), height: hp('35%'), resizeMode: "contain", alignItems:"center", justifyContent: "center", start:wp('2.5%')}}
				source={require('../../util/images/Journey_Time1_WFI.png')}
        />
    
        
        <Text style={{fontSize:hp('4.5%'),fontWeight: "bold", paddingLeft:wp('15%'), top:hp('-3%'),paddingTop:hp('2.5%')}}>
        Flight Travel Details 
        </Text>
        <Text style={{fontSize:hp('3%'), fontWeight: "bold",alignSelf: "center",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('7%'), top:hp('1%')}}>
        Enter the number of Return Flights per year :- 
        </Text>
        <Input
                style={styles.inputBox}
                value={this.state.fli}
                onChangeText={(fli)=> this.setState({fli})}
                placeholder={this.state.placeholder ||"No. of Return Flights"}
                 
				autoCapitalize='none'
                keyboardType = 'numeric'>
        </Input>
        
        
        <Footer  style={{backgroundColor: "#white" ,display:"flex",top:hp("12.5%")  }}>
      
		<Body>

        <Left style={{left:wp('5%'), top:hp('0%')}}>
          <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
              onPress= {() => {this.backButton()}}> 
              <Icon name='arrow-back' style={{ color: "#99cc00"}} /> 
            <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Back</Text> 
            
            </Button>
           </Left>
           <View style={{left:wp('2.5%'), top:hp('0.5%')}}>
            <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
           </View>

          <Right style={{start:wp('10%')}}>
           <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
              onPress= {() => {this.frontButton() }}> 
              
            <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Next</Text> 
            <Icon name='arrow-forward' style={{ color: "#99cc00"}} /> 
            </Button>
            </Right>
          </Body>
      
			</Footer>
      <View style={{  flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#white' }}>
          <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.state.modalVisibility}
            onRequestClose={ () =>{
                this.showInfoModal(!this.state.modalVisibility)
             }}
          >
               
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.modalInsideView}>
            <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText}</Text>
            <Button transparent title="Close" onPress={() => { this.showInfoModal(!this.state.modalVisibility)} }>
             <Text style={{fontSize:hp('3.5%'), fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", fontWeight: "600", top: hp('2%')}}>Close</Text>
           </Button>
          </View>
         </View>
     </Modal>
    </View>


    <View style={{  flex:1,justifyContent: 'center', alignItems: 'center', backgroundColor: '#white' }}>
          <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.state.modalVisibility2}
            onRequestClose={ () =>{
                this.showInfoModal2(!this.state.modalVisibility2)
             }}
          >
               
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={styles.modalInsideView2}>
            <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText2}</Text>
            <Button transparent title="Close" onPress={() => { this.showInfoModal2(!this.state.modalVisibility2)} }>
             <Text style={{fontSize:hp('3.5%'), fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", fontWeight: "600", top: hp('2%')}}>Close</Text>
           </Button>
          </View>
         </View>
     </Modal>
    </View>

    </Container>
    </Root>
		)
    }
}


const styles = {
  container: {
},

modalInsideView:{
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor : "white", 
    height: hp('40%') ,
    width: wp('95%'),
    borderRadius:hp('4%'),
    borderWidth: hp('1%'),
    borderColor: '#8fbb2d',
   
},
modalInsideView2:{
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor : "white", 
  height: hp('40%') ,
  width: wp('95%'),
  borderRadius:hp('4%'),
  borderWidth: hp('1%'),
  borderColor: '#8fbb2d',
 top: hp("20%")
},
inputBox: {
    width: wp('60%'),
    maxHeight: hp('7.5%'),
	borderColor: '#8fbb2d',
    borderWidth: 5,
	borderAlign: 'center',
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 30,
    fontSize: hp('3%'),
    fontWeight:"bold"
  },
}

export default FlightDetails;