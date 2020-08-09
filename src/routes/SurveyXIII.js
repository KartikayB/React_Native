import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab, Label,Radio, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyXIII extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          radio1:false,
          radio2:false,
          radio3:false,
          radio4:false,
        });
      }  

      SurveyXII()
      {
        Actions.SurveyXII()
      }
    
  SurveyXIV()
  {
    Actions.SurveyXIV()
  }

  radio1_fn(){
      this.setState({
          radio1:true,
          radio2:false,
          radio3:false,
          radio4:false,
      })
  }

  radio2_fn(){
    this.setState({
        radio1:false,
        radio2:true,
        radio3:false,
        radio4:false,
    })
}

radio3_fn(){
    this.setState({
        radio1:false,
        radio2:false,
        radio3:true,
        radio4:false,
    })
}

radio4_fn(){
    this.setState({
        radio1:false,
        radio2:false,
        radio3:false,
        radio4:true,
    })
}
  render() {
    
    return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyXII}> 
       
       <Icon name='arrow-back' style={{ color: "#57c3ee", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} ></Icon> 
           
      </Button>
    
        </Left>

        <Right >
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), display: "flex", alignSelf: "auto", left:wp('-0.1%')}} 
        onPress= {() => {console.log("Right Button") }}> 
         <Icon name='person' style={{ color: "#57c3ee", fontSize : hp('7.5%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} ></Icon> 
           
      
        </Button>
    
        </Right>

    </Header>

   <Header transparent style={{top:hp("-5%")}}>
    
        <View style={{top:hp("5%"), height:hp("2.5%"), width:wp("100%")}}>
            <LinearGradient colors={['#6dd660', '#46c595',"#25b6bf","#57c3ee"]} style={styles.linearGradient} start={{ x: 0, y: 0 }}>
          <Text style={{color: 'white', fontWeight:"bold",start:wp("30%")}}>XIII. FIXED ASSETS</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}


<ScrollView>
<Body>
<View style={{flexDirection: 'row', paddingBottom:hp("1.5%")}}>
<Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("-10%"),top:wp("4%")}}>a. Agricultural Land  </Text>
<Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1}
                style={{start:hp("5%"),top:wp("4%")}}
                onPress= {() => {this.radio1_fn()} }>
            
            </Radio>
       </View>
<View style={{flexDirection: 'row', paddingBottom:hp("1.5%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("-16%"),top:wp("4%")}}>b. House  </Text>
<Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2}
                style={{start:hp("11%"),top:wp("4%")}}
                onPress= {() => {this.radio2_fn()} }>
            
            </Radio>
       </View>
<View style={{flexDirection: 'row', paddingBottom:hp("1.5%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("-10.6%"),top:wp("4%")}}>c. Land and House  </Text>
<Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio3}
                style={{start:hp("5.7%"),top:wp("4%")}}
                onPress= {() => {this.radio3_fn()} }>
            
            </Radio>
       </View>
<View style={{flexDirection: 'row', paddingBottom:hp("1.5%")}}>
<Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("-6.5%"),top:wp("4%")}}>d. Land, House and Cattle  </Text>
<Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio4}
                style={{start:hp("1.8%"),top:wp("4%")}}
                onPress= {() => {this.radio4_fn()} }>
            
            </Radio>
       </View>

<Button style={styles.button1} 
            onPress={this.SurveyXIV}>
            <Text 
            style={{ color: "blue", fontSize: 17,justifyContent:"center",alignItem:"center", start:wp("12.5%") }}>Next</Text>
        </Button > 
</Body>

  </ScrollView>


<Footer style={{backgroundColor: 'transparent', bottom:0}}>
  <FooterTab>
<LinearGradient colors={['#6dd660', '#46c595',"#25b6bf","#57c3ee"]} style={styles.linearGradient2} start={{ x: 0, y: 0 }}>
       
        <Left >
        <Button transparent style={{start:wp("-42.5%") }} 
        onPress= {() => {console.log("Right Button")  }}> 
         <Icon name='desktop' style={{ color: "white", fontSize : hp('4%'), paddingLeft:wp('7.5%'), paddingRight:wp('7.5%')}} ></Icon> 
            </Button>
          </Left>

        <Right >
         <Button transparent style={{ start:wp("42.5%"), top:hp("-4%") }} 
            onPress= {() => {console.log("Next Button") }}> 
         <Icon name='add' style={{ color: "white",fontSize : hp('4%')}} /> 
          </Button>
          </Right>
       
    
</LinearGradient> 
</FooterTab>
</Footer>

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
    borderRadius: 1
  },
  
inputBox2: {
    width: wp('80%'),
    maxHeight: hp('7.5%'),
	  borderColor: '#D3D3D3',
    borderWidth: 2,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 30,
    fontSize: hp('3%'),
  },
  button1: {
    color: "#25b6bf",
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
   
},
customLabel: {
    //fontFamily: 'Austin-Light',
    //marginBottom: -37, 
    paddingLeft:20,
    marginTop:10
},

});
export default SurveyXIII;