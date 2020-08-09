import React from 'react'
import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class FoodPreferences extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: 1,
          UserCategory:null,
          firstlaunch : null,
          modalVisibility: false,
          modalText: "The mode of transport you choose for your daily travel decides your daily C-footprint. Car pools and use of public transport causes lesser CO2 emissions thus lessen your C-footprint."
        }
      }

      
      componentDidMount() {
        AsyncStorage.getItem("firstlaunch").then(value => {
            if(value==null){
                AsyncStorage.setItem("firstlaunch", "true").then( () => {
                    console.log("First Time")
                })
            }
            else{
                console.log("First Already Done")
            }
        })
    } 
  
    showInfoModal = (val) =>{
      this.setState({
          modalVisibility: val
      })

  }
	render() {
		return (
			<Root>
      <Container  style={[styles.container, this.state.modalVisibility ? {opacity: 0.5} :'' ]}>

      <Header transparent style={{ backgroundColor: "white" }}>
          
          <Left>
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
          onPress= {() => {console.log("Left Button") }}> 
         
              <Image
                  style={{width: wp('12.5%'), height: hp('75%'), top:hp('-7.5%'), left:wp('4%')}}
                  source={require('../../util/images/New/Profile_Icon.png')}
                  //C:\Users\karti\Desktop\Trial\CFPApp\util\images\
              />
        
          </Button>
      
          </Left>

          <Right >
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", left:wp('-0.1%')}} 
          onPress= {() => {this.showInfoModal(true) }}> 
          
              <Image
                  style={{width: wp('45%'), height:hp('35%'),start:wp('13%'), top:hp('1.5%')}}
                  source={require('../../util/images/New/indivual_info_png.png')}
              />
        
          </Button>
      
          </Right>

      </Header>

      <View>
        <Image
                style={{width: wp('80%'), height: hp('35%'), resizeMode: "contain", alignItems:"center", justifyContent: "center", start:wp('10%'),  top:hp('-6%')}}
				source={require('../../util/images/jouarny_mode_image.png')}
        />
    </View>
        
        <Text style={{fontSize:hp('4.5%'),fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-9%'),paddingTop:hp('2.5%')}}>
        Journey Mode
        </Text>
        <Text style={{fontSize:hp('2.5%'), alignSelf: "center",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('7%'), top:hp('-9%')}}>
        Select the commute you usually prefer. Choose atleast one option.
        </Text>

        <View style={{flexDirection: 'row', top:hp('-9%')}}>
           <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "JM01").then( () =>{console.log("First Category")} ) }}> 

             <Image
				style={{width: wp('40%'), height: hp('15%'),scaleX:wp('0.14%'), scaleY:hp('0.09%'), top:hp('-1%'), left:wp('-4%') }}
                source={require('../../util/images/car__vector.png')} 
            />
            </Button>

            <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "JM02").then( () =>{console.log("Second Category")} ) } } style={{width : wp('25%')}} > 
            <Image
				style={{width: wp('50%'), height: hp('15%'), start:wp('-7.5%'),scaleX:wp('0.2%'), scaleY:hp('0.13%'),top:hp('-1%'),  start : wp('-15%')}}
                source={require('../../util/images/scooter_png_1.png')}
            />
            </Button>

            <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "JM03").then( () =>{console.log("Third Category")} ) }}style={{left : wp('20%')}}  > 
            <Image
				style={{width: wp('40%'), height: hp('15%'), start:wp('-7.5%'),scaleX:wp('0.14%'), scaleY:hp('0.1%'),top:hp('-1.5%'),  start : wp('-20%')}}
                source={require('../../util/images/bus_vector.png')}
            />
            </Button>
         </View>
        

        <View style={{flexDirection: 'row',top:hp('-6%')}}>
        <Text style={{fontSize:hp('3%'), left:wp('12%')}}>
        Car
        </Text>
        <Text style={{fontSize:hp('3%'), left:wp('36%')}}>
        Scooter
        </Text>
        <Text style={{fontSize:hp('3%'), left:wp('55%')}}>
        Bus
        </Text>
        </View>


        <View style={{flexDirection: 'row'}}>
        <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "JM04").then( () =>{console.log("Fourth Category")} ) }}> 

             <Image
				style={{width:wp('40%'), height: hp('15%'),scaleX:wp('0.14%'), scaleY:hp('0.1%'), left:wp('10%'), top:hp('-3%') }}
                source={require('../../util/images/carpool_vector.png')}
            />
        </Button>
        <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "JM05").then( () =>{console.log("Fifth Category")} ) }}> 
            <Image
				style={{width: wp('40%'), height: hp('15%'), scaleX:wp('0.14%'), scaleY:hp('0.1%'), top:hp('-3%'), left:wp('10%')}}
                source={require('../../util/images/train_vector.png')}
            />
        </Button>
         </View>
        

        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize:hp('3%'), left:wp('22.5%')}}>
        Carpool
        </Text>
        <Text style={{fontSize:hp('3%'), left:wp('47.5%')}}>
        Train
        </Text>
        </View>
       
        <Footer  style={{backgroundColor: "#white" ,display:"flex"  }}>
      
		<Body>

        <Left style={{left:wp('5%'), top:hp('0%')}}>
          <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
              onPress= {() => {console.log("Back Button") }}> 
              <Icon name='arrow-back' style={{ color: "#99cc00"}} /> 
            <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Back</Text> 
            
            </Button>
           </Left>
           <View style={{left:wp('2.5%'), top:hp('0.5%')}}>
            <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
           </View>

          <Right style={{start:wp('10%')}}>
           <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
              onPress= {() => {console.log("Next Button") }}> 
              
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
    </Container>
    </Root>
		)
	}
}

const styles = {
  container: {
    //flex: 1,
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
   
}
}




export default FoodPreferences
