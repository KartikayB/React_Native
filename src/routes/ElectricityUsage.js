import React from 'react'
import { View, Text, Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content, Radio } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';


class ElectricityUsage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: 4,
          modalVisibility: false,
          modalText: "Please enter the monthly electricity consumption of your household in    KWh. If you dont know this, you can    refer your electricity bill.",
          usage1: {label:"Less than 200 units",value:"Less than 200 units",set:"PU01"},
          usage2: {label: "200-400 units", value:"200-400 units",set:"PU02"},
          usage3: {label:"400-800 units", value:"400-800 units",set:"PU03"},
          usage4: {label:"800- 1200 units", value:"800- 1200 units",set:"PU04"},
          usage5: {label:"1200- 1500 units",value:"1200- 1500 units",set:"PU05"},
          usage6: {label:"1500- 2000 units", value:"1500- 2000 units",set:"PU06"},
          usage7: {label:"2000-2500 units", value:"2000-2500 units",set:"PU07"},
          usage8: {label:"2500-3500 units", value:"2500-3500 units",set:"PU08"}

        }
      
      }
      componentDidMount() {
        AsyncStorage.getItem("Usage_Value").then(value => {
            if(value==null){
                    console.log("First Time")
                    console.log(value)
            }
            else{
                console.log("First Already Done"),
                console.log(value)
                //console.log(JSON.stringify(value))
               
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
                  style={{width: wp('12.5%'), height: hp('75%'), top:hp('-7.5%'), left:wp('-2%')}}
                  source={require('../../util/images/New/Profile_Icon.png')}
                  //C:\Users\karti\Desktop\Trial\CFPApp\util\images\
              />
        
          </Button>
      
          </Left>

          <Right >
          <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", left:wp('6%')}} 
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
        
        <Text style={{fontSize:hp('4.5%'), alignSelf: "center",fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-9%'),paddingTop:hp('2.5%'), start:wp('-4%')}}>
        Electricity Usage 
        </Text>
        <Text style={{fontSize:hp('2.75%'), alignSelf: "center",fontWeight: "bold",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('1%'), top:hp('-5%')}}>
        Select the approximate Units(KWh) of Electricity Consumption per month
        </Text>





















        <DropDownPicker
           
            items = {[this.state.usage1, this.state.usage2, this.state.usage3, this.state.usage4, this.state.usage5,this.state.usage6, this.state.usage7, this.state.usage8 ]}
            placeholder="Select Usage"
            // {label:"Less than 200 units",value:"Less than 200 units",set:"PU01"},{label: "200-400 units", value:"200-400 units",set:"PU02"}, {label:"400-800 units", value:"400-800 units",set:"PU03"}, {label:"800- 1200 units", value:"800- 1200 units",set:"PU04"},{label:"1200- 1500 units",value:"1200- 1500 units",set:"PU05"},{label:"1500- 2000 units", value:"1500- 2000 units",set:"PU06"},{label:"2000-2500 units", value:"2000-2500 units",set:"PU07"},{label:"2500-3500 units", value:"2500-3500 units",set:"PU07"}
            containerStyle={{height: hp("7.5%"), width:wp("70%"), start : wp("15%"),top:hp('-1.5%')}}
            style={{backgroundColor: '#fafafa',textAlign: 'left'}}
            itemStyle={{
                fontWeight: 'bold',
                textAlign: 'centre'
            }}
            labelStyle={{
              fontSize: 14,
              color: '#000'
          }}
          activeItemStyle={{justifyContent: 'center', textAlign: 'left' }}
          activeLabelStyle={{color: 'blue'}}

          
            placeholderStyle={{
              textAlign: 'center'
          }}
          
          
          activeItemStyle={{ textAlign: 'centre' }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
        //     onChangeItem={item => AsyncStorage.setItem(
        // 'Usage_Value',item.set,
        // () => {
        //     AsyncStorage.getItem('Usage_Value', (err, result) => {
        //       console.log(result);
        //     });}
        //   )}
           />



















        <Footer  style={{backgroundColor: "#white" ,display:"flex" , top : hp("20%") }}>
      
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
            <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", paddingBottom:hp("7.5%")}}>{this.state.modalText}</Text>
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




export default ElectricityUsage
