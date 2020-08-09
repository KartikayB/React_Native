import React from 'react'
import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class UserCategory extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: 0,
          UserCategory:null,
          firstlaunch : null,
          modalVisibility: false,
          modalText: "C-footprint is the amount of gaseous emissions that causes climate change. It is the measure of the exclusive total amount of CO2 emissions that is directly and indirectly caused by an activity or is accumulated over the life stages of a product."
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
                  style={{width: wp('12%'), height: hp('30%'), top:hp('1.5%'), left:wp('3%')}}
                  source={require('../../util/images/New/indivual_png.png')}
          
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
                style={{width: wp('90%'), height: hp('40%'), resizeMode: "contain", alignItems:"center", justifyContent: "center", start:wp('5%'),  top:hp('-5%')}}
				source={require('../../util/images/New/user_catg_image.png')}
        />
    </View>
        
        <Text style={{fontSize:hp('4.5%'),fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-9%')}}>
        Category Selection
        </Text>
        <Text style={{fontSize:hp('2.5%'), alignSelf: "center",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('5%'), top:hp('-9%')}}>
        Select the category you belong to. Choose atleast one option.
        </Text>

        <View style={{flexDirection: 'row', top:hp('-9%')}}>
           <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC01").then( () =>{console.log("First Category")} ) }}> 

             <Image
				style={{width: wp('50%'), height: hp('15%'),scaleX:wp('0.5%'), scaleY:hp('0.3%'), top:hp('6%'), left:wp('5%') }}
                source={require('../../util/images/New/indivual_png.png')}
            />
            </Button>
            <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC02").then( () =>{console.log("Second Category")} ) }}> 
            <Image
				style={{width: wp('55%'), height: hp('15%'), start:wp('-7.5%'),scaleX:wp('0.42%'), scaleY:hp('0.26%')}}
                source={require('../../util/images/New/school_png.png')}
            />
            </Button>
         </View>
        

        <View style={{flexDirection: 'row',top:hp('-6%')}}>
        <Text style={{fontSize:hp('3%'), left:wp('20%')}}>
        Individual
        </Text>
        <Text style={{fontSize:hp('3%'), left:wp('42.5%')}}>
        School
        </Text>
        </View>


        <View style={{flexDirection: 'row'}}>
        <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC03").then( () =>{console.log("Third Category")} ) }}> 

             <Image
				style={{width:wp('50%'), height: hp('15%'),scaleX:wp('0.45%'), scaleY:hp('0.26%'), top:hp('6%'), left:wp('5%'), top:hp('-2.5%') }}
                source={require('../../util/images/New/hotel_png.png')}
            />
        </Button>
        <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC04").then( () =>{console.log("Fourth Category")} ) }}> 
            <Image
				style={{width: wp('50%'), height: hp('15%'), start:wp('-5%'),scaleX:wp('0.45%'), scaleY:hp('0.26%'), top:hp('-1.5%')}}
                source={require('../../util/images/New/corporate_png1.png')}
            />
        </Button>
         </View>
        

        <View style={{flexDirection: 'row',top:hp('-1%')}}>
        <Text style={{fontSize:hp('3%'), left:wp('25%')}}>
        Hotel
        </Text>
        <Text style={{fontSize:hp('3%'), left:wp('47.5%')}}>
        Corporate
        </Text>
        </View>
       
        <Footer  style={{backgroundColor: "#white" ,display:"flex"  }}>
      
		<Body>
     
           <Left style={{left:wp('37.5%'), top:hp('2.5%')}}>
            <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
            </Left>

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
    height: hp('50%') ,
    width: wp('90%'),
    borderRadius:hp('3.5%'),
    borderWidth: hp('1%'),
    borderColor: '#8fbb2d',
   
}
}




export default UserCategory

