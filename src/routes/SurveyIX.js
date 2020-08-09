import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyIX extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          radio1_8a:false,
          radio2_8a:false,
          radio1_8b:false,
          radio2_8b:false,
          radio1_8c:false,
          radio2_8c:false,
          radio1_8d:false,
          radio2_8d:false,
          radio1_9:false,
          radio2_9:false,
          Q5:'',
          Q6:'',
          Q7:'',
          Q8a:'',
          Q8b:'',
          Q8c:'',
          Q8d:'',
          Q9:'',
        });
      }  

      SurveyX()
      {
        Actions.SurveyX()
      }
    
  SurveyVIII()
  {
    Actions.SurveyVIII()
  }

  radio1_8a(){
      this.setState({
          radio1_8a:true,
          radio2_8a:false,
      })
  }

  radio2_8a(){
    this.setState({
        radio1_8a:false,
        radio2_8a:true,
    })
}

radio1_8b(){
    this.setState({
        radio1_8b:true,
        radio2_8b:false,
        
    })
    
}

radio2_8b(){
  this.setState({
      radio1_8b:false,
      radio2_8b:true,
     
  })
}

radio1_8c(){
    this.setState({
        radio1_8c:true,
        radio2_8c:false,
        
    })
}

radio2_8c(){
  this.setState({
      radio1_8c:false,
      radio2_8c:true,
      
  })
}

radio1_8d(){
    this.setState({
        radio1_8d:true,
        radio2_8d:false,
        
    })
}

radio2_8d(){
  this.setState({
      radio1_8d:false,
      radio2_8d:true,
      
  })
}

radio1_9(){
    this.setState({
        radio1_9:true,
        radio2_9:false,
        
    })
}

radio2_9(){
  this.setState({
      radio1_9:false,
      radio2_9:true,
     
  })
}

  render() {
    let reasonQ1 = [{
        value: 'Povery',
      }, {
        value: 'Friends / Neighbor going to workshed ',
      }, {
        value: 'Custom and convention ',
      }, {
        value: 'Tike passing',
      }];

    let worklocationQ2= [{
        value: 'Factory',
      }, {
        value: 'At House',
      }];

      let ModeofPaymentQ3 = [{
        value: 'Piece Rate',
      }, {
        value: 'Time Rate',
      }, {
        value: 'Anyother',
      }];

      let wagesQ4 = [{
        value: 'Daily',
      }, {
        value: 'Weekly',
      }, {
        value: 'Monthly',
      }];
    
      return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyVIII}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("25%")}}>IX.	WAGE AND SAVINGS</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>
<Label style={styles.customLabel}>1. Reasons for being employed at this age	:</Label>
                    <Dropdown
                        label='Reason for being empplyed at this age'
                        data={reasonQ1}
                    />
<Label style={styles.customLabel}>2. Where is your work carried out : </Label>
                    <Dropdown
                        label='Where is your work carried out'
                        data={worklocationQ2}
                    />
<Label style={styles.customLabel}>3.Mode of payment : </Label>
                    <Dropdown
                        label='Mode of Payment'
                        data={ModeofPaymentQ3}
                    />
<Label style={styles.customLabel}>4. System of wages : </Label>
                    <Dropdown
                        label='System of wages'
                        data={wagesQ4}
                    />
<Label style={styles.customLabel}>5. Your wage per week week : </Label>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
                    <Input
						value={this.state.Q5}
						onChangeText={(Q5)=>this.setState({Q5})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>6. Monthly Income : </Label>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
					<Input
						value={this.state.Q6}
						onChangeText={(Q6)=>this.setState({Q6})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>7. Annual Income : </Label>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
					<Input
						value={this.state.Q7}
						onChangeText={(Q7)=>this.setState({Q7})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>8. Do you get from your employer in addition to wage the following : </Label>
<Label style={styles.customLabel}>   	a. Bonus : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_8a}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_8a()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_8a}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_8a()} }>
            </Radio>
       </View>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
                    <Input
						value={this.state.Q8a}
						onChangeText={(Q8a)=>this.setState({Q8a})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>   	b. Provident Fund : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_8b}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_8b()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_8b}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_8b()} }>
            </Radio>
       </View>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
                    <Input
						value={this.state.Q8b}
						onChangeText={(Q8b)=>this.setState({Q8b})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>   	c. Fringe Benefits : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_8c}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_8c()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_8c}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_8c()} }>
            </Radio>
       </View>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
                    <Input
						value={this.state.Q8c}
						onChangeText={(Q8c)=>this.setState({Q8c})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>   	d. Any Other : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_8d}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_8d()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_8d}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_8d()} }>
            </Radio>
       </View>


<Label style={styles.customLabel}>9. Do you contribute to your family income : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_9}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_9()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_9}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_9()} }>
            </Radio>
       </View>
<Label style={{top:hp("5%"),start:wp("11%")}}>INR </Label>
                    <Input
						value={this.state.Q9}
                        onChangeText={(Q9)=>this.setState({Q9})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Button style={styles.button1} 
            onPress={this.SurveyX}>
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
export default SurveyIX;