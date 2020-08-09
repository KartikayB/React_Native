import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyX extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
        Q1amt:'',
        Q2amt:'',
        Q3amt:'',
        Q4amt:'',
        Q5amt:'',
        Q6amt:'',
        Q7amt:'',
        Q8amt:'',
        Q1annual:'',
        Q2annual:'',
        Q3annual:'',
        Q4annual:'',
        Q5annual:'',
        Q6annual:'',
        Q7annual:'',
        Q8annual:'',
        });
      }  

      SurveyXI()
      {
        Actions.SurveyXI()
      }
    
  SurveyIX()
  {
    Actions.SurveyIX()
  }

  render() {
    
      return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyIX}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("20%")}}>X.	HOUSEHOLD ANNUAL INCOME</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>
<Label style={styles.customLabel}>1. Main work : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q1amt}
						onChangeText={(Q1amt)=>this.setState({Q1amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q1annual}
						onChangeText={(Q1annual)=>this.setState({Q1annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Label style={styles.customLabel}>2. Marginal work : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q2amt}
						onChangeText={(Q2amt)=>this.setState({Q2amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q2annual}
						onChangeText={(Q2annual)=>this.setState({Q2annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>3. Wife's Income : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q3amt}
						onChangeText={(Q3amt)=>this.setState({Q3amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q3annual}
						onChangeText={(Q3annual)=>this.setState({Q3annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Label style={styles.customLabel}>4. Children's Income : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q4amt}
						onChangeText={(Q4amt)=>this.setState({Q4amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q4annual}
						onChangeText={(Q4annual)=>this.setState({Q4annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Label style={styles.customLabel}>5. Cattle Poultry : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q5amt}
						onChangeText={(Q5amt)=>this.setState({Q5amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q5annual}
						onChangeText={(Q5annual)=>this.setState({Q5annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Label style={styles.customLabel}>6. Land : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q6amt}
						onChangeText={(Q6amt)=>this.setState({Q6amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q6annual}
						onChangeText={(Q6annual)=>this.setState({Q6annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
            
<Label style={styles.customLabel}>7. Interest : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q7amt}
						onChangeText={(Q7amt)=>this.setState({Q7amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q7annual}
						onChangeText={(Q7annual)=>this.setState({Q7annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>

<Label style={styles.customLabel}>8. Others : </Label>
<Label style={{start:wp("5%")}}>Amount per month (Rs.)</Label>
                    <Input
						value={this.state.Q8amt}
						onChangeText={(Q8amt)=>this.setState({Q8amt})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={{start:wp("5%")}}>Annual (Rs.)</Label>
                    <Input
						value={this.state.Q8annual}
						onChangeText={(Q8annual)=>this.setState({Q8annual})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>                    

<Button style={styles.button1} 
            onPress={this.SurveyXI}>
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
export default SurveyX;