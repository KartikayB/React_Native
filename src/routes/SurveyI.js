import React from 'react'
import { StyleSheet, View, Text , Modal,  ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Body,Label, Root,Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { app } from 'firebase';

class SurveyI extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          DateofInterview:'',
          NameofMandal:'',
          NameofDistrict:'',
          NameofVillage:'',
          AadharNo:'',
          RegNo:'',
          IPNo:'',
          MNo:'',
        });
      }  

  TravelDetails()
  {
    Actions.TravelDetails()
  }
  SurveyII()
  {
    Actions.SurveyII()
  }

  render() {
    return (
      <Root>
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress={this.TravelDetails}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("32.5%")}}>I. GENERAL DATA</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<Body>
<ScrollView>

<Content>
<Label style={styles.customLabel}>1. Date of Interview : </Label>
					<Input
						value={this.state.DateofInterview}
						onChangeText={(DateofInterview)=>this.setState({DateofInterview})}
						style={styles.inputBox2}
            autoCapitalize='none'
            placeholderTextColor="red"
					/>
<Label style={styles.customLabel}>2. Name of Mandal : </Label>
					<Input
						value={this.state.NameofMandal}
						onChangeText={(NameofMandal)=>this.setState({NameofMandal})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>3. Name of District : </Label>
					<Input
						value={this.state.NameofDistrict}
						onChangeText={(NameofDistrict)=>this.setState({NameofDistrict})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>4. Name of Village	: </Label>
					<Input
						value={this.state.NameofVillage}
						onChangeText={(NameofVillage)=>this.setState({NameofVillage})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>5. Aadhar Number (Unique ID) : </Label>
					<Input
						value={this.state.AadharNo}
						onChangeText={(AadharNo)=>this.setState({AadharNo})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>6. Registration No. as per Labour Department : </Label>
					<Input
						value={this.state.RegNo}
						onChangeText={(RegNo)=>this.setState({RegNo})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>7. UAN No.	: </Label>
					<Input
						value={this.state.UANNo}
						onChangeText={(UANNo)=>this.setState({UANNo})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>8. ESIC/IP No.	: </Label>
					<Input
						value={this.state.IPNo}
						onChangeText={(IPNo)=>this.setState({IPNo})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>9. Mobile No.	: </Label>
					<Input
                        value={this.state.MNo}
						onChangeText={(MNo)=>this.setState({MNo})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Button style={styles.button1} 
            onPress={this.SurveyII}>
            <Text 
            style={{ color: "blue", fontSize: 17,justifyContent:"center",alignItem:"center",start:wp('13%') }}>Next</Text>
        </Button > 



</Content>
</ScrollView>

</Body>
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
 </Root>
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
    // top:hp("67.5%")
  },
  
inputBox2: {
    width: wp('80%'),
    height: hp("15%"),
    maxHeight: hp('7.5%'),
	  borderColor: '#D3D3D3',
    borderWidth: 2,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 30,
    fontSize: hp('3%'),
    
  },
  button1: {
    color: "blue",
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
    marginTop:5,
    fontSize:hp("3%")
},


});
export default SurveyI;