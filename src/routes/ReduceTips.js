import React from 'react'
import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content , Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as GLOBAL from '../../util/Tips'
class ReduceTips extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: 0,
          UserCategory:null,
          firstlaunch : null,
          modalVisibility: false,
          modalText: "Tips to reduce the Carbon-footprint. Select each category to know more.... ",
          modalVisibility_tips: false,
          modalText_tips: "",
        }
      }
      
  
    showInfoModal = (val) =>{
      this.setState({
          modalVisibility: val
      })

  }
  showInfoModal_tips = (val, num) =>{

    switch(num) {
      case "1":
        this.setState({
          modalText_tips: GLOBAL.Message1
      })
        break;
      case "2":
        this.setState({
          modalText_tips: GLOBAL.Message2
      })
        break;
      case "3":
        this.setState({
          modalText_tips: GLOBAL.Message3
      })
      break;
      case "4":
        this.setState({
          modalText_tips: GLOBAL.Message4
      })
      break;
      default:
        console.log("Unexpected Input")
        // code block
    }
  

    this.setState({
        modalVisibility_tips: val
    })

}

	render() {
		return (
			<Root>
      <Container  style={[styles.container, (this.state.modalVisibility||this.state.modalVisibility_tips) ? {opacity: 0.5} :'' ]}>

      <Header transparent style={{ backgroundColor: "white" }}>
          
          <Left>
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('2%'), paddingRight:wp('5%')}} 
          onPress= {() => {console.log("Left Button") }}> 
         
         <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%'), left:wp('-.5%')}}
                                            source={require('../../util/images/person_icon.png')}
                                />
        
          </Button>
      
          </Left>

          <Right >
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('2%'), display: "flex", alignSelf: "auto", left:wp('-0.1%')}} 
          onPress= {() => {this.showInfoModal(true) }}> 
          
          <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
                                    source={require('../../util/images/info_icon.png')}
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
        
        <Text style={{fontSize:hp('3.5%'),fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-9%'), paddingTop:wp('10%'),start:wp('5%')}}>
        Tips To Reduce C-Footprint
        </Text>
       

        <View style={{flexDirection: 'row', top:hp('-1.5%'), start:wp('7.5%')}}>
           <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", start:wp("15%"), top:hp("-1%")}} 
          onPress= {() => {this.showInfoModal_tips(true,"1") }}> 
             {/* <Thumbnail style={{marginHorizontal: wp('15%')}}                         
                                        source={require('../../util/images/ucatg/individual.png')}
                                    /> */}
              <Icon name='car' style={{ color: "#99cc00", scaleX:wp(".75%"), scaleY:hp("0.5%"), start:wp("0%"),top:hp("-1%")}}></Icon>
            </Button>
            <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", start:wp("45%")}} 
          onPress= {() => {this.showInfoModal_tips(true,"2") }}> 
            {/* <Thumbnail style={{marginHorizontal: wp('15%'),}}
                                        
                                        source={require('../../util/images/ucatg/school.png')}
                                    /> */}
                    <Icon name='airplane' style={{ color: "#99cc00", scaleX:wp(".75%"), scaleY:hp("0.45%"),top:hp("-2%")}}></Icon>

            </Button>
         </View>
        


        <View style={{flexDirection: 'row',start:wp('2.5%'),top:hp('2.5%')}}>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto",top:hp('5%'), start:wp('20%')}} 
          onPress= {() => {this.showInfoModal_tips(true,"3") }}> 
            {/* <Thumbnail  style={{marginHorizontal: wp('15%'), top:hp("-2.5%")}}  
                                        
                                        source={require('../../util/images/ucatg/hotel.png')}
                                    /> */}

        <Icon name='egg' style={{ color: "#99cc00", scaleX:wp(".65%"), scaleY:hp("0.4%"), start:wp("-1%"),top:hp('-2%')}}></Icon>

        </Button>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", top:hp('5%'), start:wp('51%')}} 
          onPress= {() => {this.showInfoModal_tips(true,"4") }}> 
             {/* <Thumbnail  style={{marginHorizontal: wp('15%'),top:hp("-2.5%")}}  
                                        
                                        source={require('../../util/images/ucatg/corporate.png')}
                                    /> */}
            <Icon name='bulb' style={{ color: "#99cc00", scaleX:wp(".75%"), scaleY:hp("0.45%"),top:hp("-2%")}}></Icon>
          
        </Button>
         </View>
        

       
        <Footer  style={{backgroundColor: "#white" ,display:"flex" , top:hp("15%") }}>
      
		<Body>
     
        <Left style={{left:wp('5%'), top:hp('0%')}}>
          <Button transparent style={{backgroundColor:"white" , paddingRight:50}} 
              onPress= {() => {console.log("Back Button") }}> 
              <Icon name='arrow-back' style={{ color: "#99cc00"}} /> 
            <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Back</Text> 
            
            </Button>
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
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
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
            visible={this.state.modalVisibility_tips}
            onRequestClose={ () =>{
                this.showInfoModal_tips(!this.state.modalVisibility_tips)
             }}
          >   
          <View style={{ flex:1, justifyContent: 'center', alignItems: 'center',top: hp('20%') }}>
            <View style={styles.modalInsideView}>
            <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText_tips}</Text>
            <Button transparent style={{top:hp("5%")}} title="Close" onPress={() => { this.showInfoModal_tips(!this.state.modalVisibility_tips)} }>
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




export default ReduceTips

