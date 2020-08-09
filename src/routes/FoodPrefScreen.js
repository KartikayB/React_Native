import React from 'react'
import { View, Text, AsyncStorage,Image, ImageBackground,Modal } from 'react-native'
import {Root, Container , Header, Body, Button,  Left, Right, Footer,  Icon, Content, Radio } from 'native-base';
import {Actions} from 'react-native-router-flux';
import Dots from 'react-native-dots-pagination';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class FoodPrefScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          active: 3,
          
          radio1:false,
          radio2:false,
          radio3:false,
          radio4:false,
          modalVisibility: false,
          modalText: "Your food preference decides your daily C-foorprint. Non-Veg diets have high C-footprint as compared to veg and vegan diets."
        }
      }

    //   componentDidMount() {
    //     AsyncStorage.getItem("Food_Pref_Value").then(value => {
    //         if(value==null){
    //                 console.log("First Time")
    //                 console.log(value)
    //         }
    //         else{
    //             console.log("First Already Done")
    //             //console.log(JSON.stringify(value))
    //             if(value=="\"FP01\""){
    //               this.radio1_function();
    //             }
    //             else if(value=="\"FP02\""){
    //               this.radio2_function();
    //             }
    //             else if(value=="\"FP03\""){
    //               this.radio3_function();
    //             }
    //             else{
    //               this.radio4_function();
    //             }
    //         }
    //     })
    // } 

    showInfoModal = (val) =>{
      this.setState({
          modalVisibility: val
      })

  }

  radio1_function(){
    this.setState({
        radio1: true,
        radio2: false,
        radio3: false,
        radio4: false
    })
    // AsyncStorage.setItem(
    //     'Food_Pref_Value',
    //     JSON.stringify("FP01"),
    //     () => {
    //         AsyncStorage.getItem('Food_Pref_Value', (err, result) => {
    //           console.log(result);
    //         });}
    // );
    // console.log("Daily Non Veg")
  }

  radio2_function(){
    this.setState({
        radio1: false,
        radio2: true,
        radio3: false,
        radio4: false
    })
    // AsyncStorage.setItem(
    //     'Food_Pref_Value',
    //     JSON.stringify("FP02"),
    //     () => {
    //         AsyncStorage.getItem('Food_Pref_Value', (err, result) => {
    //           console.log(result);
    //         });}
    // );
    // console.log("Non Veg Sometimes")
  }

  radio3_function(){
    this.setState({
        radio1: false,
        radio2: false,
        radio3: true,
        radio4: false
    })
    // AsyncStorage.setItem(
    //     'Food_Pref_Value',
    //     JSON.stringify("FP03"),
    //     () => {
    //         AsyncStorage.getItem('Food_Pref_Value', (err, result) => {
    //           console.log(result);
    //         });}
    // );
    // console.log("Vegetarian")
  }

  radio4_function(){
    this.setState({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: true
    })
    // AsyncStorage.setItem(
    //     'Food_Pref_Value',
    //     JSON.stringify("FP04"),
    //     () => {
    //         AsyncStorage.getItem('Food_Pref_Value', (err, result) => {
    //           console.log(result);
    //         });}
    // );
    // console.log("Vegan")
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
        
        <Text style={{fontSize:hp('4.5%'), alignSelf: "center",fontWeight: "bold", paddingLeft:wp('10%'), top:hp('-9%'),paddingTop:hp('2.5%'), start:wp('-5%')}}>
        Food Preference
        </Text>
        <Text style={{fontSize:hp('2.5%'), alignSelf: "center",paddingLeft:wp('10%'),paddingRight:wp('10%'), paddingBottom:hp('1%'), top:hp('-9%')}}>
        Select your diet choice per week
        </Text>

        <View style={{flexDirection: 'row',top:hp('-5%')}}>
        <Icon name='fast-food' style={{ color: "red", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} /> 
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}> Non Veg Daily</Text>



























        
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1}
                style={{start:hp("17.5%"),top:wp("4%")}}
                onPress= {() => {this.radio1_function()} }>
            
            </Radio>
       </View>

       <View style={{flexDirection: 'row',top:hp('-5%')}}>
        <Icon name='fast-food' style={{ color: "#fe8585", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} /> 
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}> Non Veg Sometimes</Text>
        
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2}
                style={{start:hp("10.3%"),top:wp("4%")}}
                onPress= {() => {this.radio2_function()} }>
            
            </Radio>
       </View>

       <View style={{flexDirection: 'row',top:hp('-5%')}}>
        <Icon name='fast-food' style={{ color: "#129426", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} /> 
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}> Vegetarian</Text>
        
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio3}
                style={{start:hp("21.2%"),top:wp("4%")}}
                onPress= {() => {this.radio3_function()} }>
            
            </Radio>
       </View>

       
       <View style={{flexDirection: 'row',top:hp('-5%')}}>
        <Icon name='fast-food' style={{ color: "#8ce78c", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} /> 
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}> Vegan</Text>
        
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio4}
                style={{start:hp("26.2%"),top:wp("4%")}}
                onPress= {() => {this.radio4_function()} }>
            
            </Radio>
       </View>





















        <Footer  style={{backgroundColor: "#white" ,display:"flex" , top : hp("-2%") }}>
      
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




export default FoodPrefScreen
