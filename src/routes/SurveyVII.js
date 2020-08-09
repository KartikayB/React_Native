import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyVII extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          radio1_10:false,
          radio2_10:false,
          radio1_11:false,
          radio2_11:false,
          radio1_13:false,
          radio2_13:false,
          num11:false,
          num13:false,
          Q3:'',
          Q4:'',
          Q5:'',
          Q6:'',
          Q7:'',
          Q8:'',
          Q9:'',
          Q11:'',
          Q12:'',
          Q13yes:'',
          Q13no:'',
          
        });
      }  

      SurveyVIII()
      {
        Actions.SurveyVIII()
      }
    
  SurveyVI()
  {
    Actions.SurveyVI()
  }

  radio1_10(){
      this.setState({
          radio1_10:true,
          radio2_10:false,
      })
  }

  radio2_10(){
    this.setState({
        radio1_10:false,
        radio2_10:true,
    })
}

radio1_11(){
    this.setState({
        radio1_11:true,
        radio2_11:false,
      
    })
    
}

radio2_11(){
  this.setState({
      radio1_11:false,
      radio2_11:true,
      
  })
}

radio1_13(){
    this.setState({
        radio1_13:true,
        radio2_13:false,
        
    })
}

radio2_13(){
  this.setState({
      radio1_13:false,
      radio2_13:true,
  
  })
}

  render() {
    let work = [{
        value: 'Agriculture and Forestry',
      }, {
        value: 'Manufacturing',
      }, {
        value: 'Transportation, Storage and Communication',
      }, {
        value: 'Construction',
      }, {
        value: 'Electricity, Gas and Water Supply',
      }, {
        value: 'Private Households with Employed person',
      }, {
        value: 'Financial intermediation',
      }, {
        value: 'Education',
      }, {
        value: 'Health & Social Work',
      }];

    let condition = [{
        value: 'Satisfactory',
      }, {
        value: 'Not satisfactory',
      },{
      value: 'No comment',
    }];
    
    return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyVI}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("30%")}}>VII. OCCUPATION </Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>
<Label style={styles.customLabel}>1. Category of work : </Label>
                    <Dropdown
                        label='Category of work'
                        data={work}
                    />
<Label style={styles.customLabel}>2. Conditions of work : </Label>
                    <Dropdown
                        label='Conditions of work'
                        data={condition}
                    />
<Label style={styles.customLabel}>3. Number of years of service : </Label>
					<Input
						value={this.state.Q3}
						onChangeText={(Q3)=>this.setState({Q3})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>4. Distance from Residence : </Label>
					<Input
						value={this.state.Q4}
						onChangeText={(Q4)=>this.setState({Q4})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>5. No. of days work in a week : </Label>
					<Input
						value={this.state.Q5}
						onChangeText={(Q5)=>this.setState({Q5})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>6. When do you leave from the huse to the work place : </Label>
					<Input
						value={this.state.Q6}
						onChangeText={(Q6)=>this.setState({Q6})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>7. When do you begin your work	: </Label>
					<Input
						value={this.state.Q7}
						onChangeText={(Q7)=>this.setState({Q7})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>8. When do you finish your work :</Label>
					<Input
						value={this.state.Q8}
						onChangeText={(Q8)=>this.setState({Q8})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>9. How many hours do you work per day :  </Label>
					<Input
						value={this.state.Q9}
						onChangeText={(Q9)=>this.setState({Q9})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>10	Rest / Leisure time if any : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_10}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_10()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_10}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_10()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>11. Is there any accident involved in your workplace : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_11}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_11()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_11}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_11()} }>
            
            </Radio>
       </View>
<Label style={styles.customLabel}>If Yes Nature of work</Label>
          <Input
              value={this.state.Q11}
              onChangeText={(Q11)=>this.setState({Q11})}
              style={styles.inputBox2}
              autoCapitalize='none'
          /> 
<Label style={styles.customLabel}> 12. Is there adequate provision against this risk : </Label>
                <Input
                    value={this.state.Q12}
                    onChangeText={(Q12)=>this.setState({Q12})}
                    style={styles.inputBox2}
                    autoCapitalize='none'
                />
<Label style={styles.customLabel}>13. Do you like you job : </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_13}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_13()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_13}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_13()} }>
            
            </Radio>
       </View>
<Label style={styles.customLabel}>    If 'Yes', give reason</Label>
        <Input
            value={this.state.Q13yes}
            onChangeText={(Q13yes)=>this.setState({Q13yes})}
            style={styles.inputBox3}
            autoCapitalize='none'
        /> 
        
        <Label style={styles.customLabel}>    If 'No', give reason</Label>
        <Input
            value={this.state.Q13no}
            onChangeText={(Q13no)=>this.setState({Q13no})}
            style={styles.inputBox3}
            autoCapitalize='none'
        />  

<Button style={styles.button1} 
            onPress={this.SurveyVIII}>
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
export default SurveyVII;