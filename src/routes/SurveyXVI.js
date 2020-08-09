import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyXVI extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          radio1_1:false,
          radio2_1:false,
          radio1_2:false,
          radio2_2:false,
          radio1_3:false,
          radio2_3:false,
          radio1_4:false,
          radio2_4:false,
          Q3:'',
          Q4:'',
        });
      }  

      SurveyXVII()
      {
        Actions.SurveyXVII()
      }
    
  SurveyXV()
  {
    Actions.SurveyXV()
  }

  radio1_1(){
      this.setState({
          radio1_1:true,
          radio2_1:false,
      })
  }

  radio2_1(){
    this.setState({
        radio1_1:false,
        radio2_1:true,
    })
}

radio1_2(){
    this.setState({
        radio1_2:true,
        radio2_2:false,
        
    })
    
}

radio2_2(){
  this.setState({
      radio1_2:false,
      radio2_2:true,
     
  })
}

radio1_3(){
    this.setState({
        radio1_3:true,
        radio2_3:false,
        
    })
}

radio2_3(){
  this.setState({
      radio1_3:false,
      radio2_3:true,
      
  })
}

radio1_4(){
    this.setState({
        radio1_4:true,
        radio2_4:false,
        
    })
}

radio2_4(){
  this.setState({
      radio1_4:false,
      radio2_4d:true,
      
  })
}


  render() {
    
      return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyXV}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("25%")}}>XVI.	WAGE AND SAVINGS</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>

<Label style={styles.customLabel}>1. Has the standard of living of your family grown up due to your employment? </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_1}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_1()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_1}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_1()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>2. Do your family members support you? </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_2}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_2()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_2}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_2()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>3. Is there any tension between you and your spouse due to your employment? </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_3}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_3()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_3}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_3()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>If 'Yes' what are the reasons? </Label>
                    <Input
						value={this.state.Q3}
						onChangeText={(Q3)=>this.setState({Q3})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>4. Do you get social acceptance in your locality? </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_4}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_4()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_4}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_4()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>If 'No' what are the reasons? </Label>
                    <Input
						value={this.state.Q4}
						onChangeText={(Q4)=>this.setState({Q4})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Button style={styles.button1} 
            onPress={this.SurveyXVII}>
            <Text 
            style={{ color: "blue", fontSize: 17,justifyContent:"center",alignItem:"center",start:wp('13%') }}>Next</Text>
        </Button > 


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
    borderRadius: 1,
  },
  
  inputBox3: {
    width: wp('70%'),
    maxHeight: hp('15%'),
	borderColor: '#D3D3D3',
    borderWidth: 2,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 30,
    fontSize: hp('3%'),
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
export default SurveyXVI;