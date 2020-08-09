import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyXVIII extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          
        });
      }  

      SurveyXVII()
      {
        Actions.SurveyXVII()
      }
    

 

  render() {
    let HealthStatusQ1 = [{
        value: 'Very poor',
      }, {
        value: 'Poor',
      }, {
        value: 'Average',
      }, {
        value: 'Good',
      }, {
        value: 'Excellent',
      }];

    let HealthCareQ2= [{
        value: 'Government Hospital',
      }, {
        value: 'Private Hospital',
      }, {
        value: 'Self Treatment',
      }];

      let QualityQ3 = [{
        value: 'Excellent',
      }, {
        value: 'Good',
      }, {
        value: 'Average',
      }, {
        value: 'Poor',
      }, {
        value: 'Very Poor',
      }, {
        value: 'No Idea',
      }];

      let ReasonsQ4 = [{
        value: 'Free treatment',
      }, {
        value: 'Better service',
      }, {
        value: 'Diseases of small nature',
      }];

      let AwarenessQ5 = [{
        value: 'Aware',
      }, {
        value: 'Not aware',
      }];
    
      return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyXVII}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("27.5%")}}>XVIII.	HEALTH STATUS</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>
<Label style={styles.customLabel}>1. Health status of the workers :</Label>
                    <Dropdown
                        label='Health status of the workers'
                        data={HealthStatusQ1}
                    />
<Label style={styles.customLabel}>2. Choice of healthcare services : </Label>
                    <Dropdown
                        label='Choice of healthcare services'
                        data={HealthCareQ2}
                    />
<Label style={styles.customLabel}>3. Quality of treatment in private hospital / Govt. Hospital : </Label>
                    <Dropdown
                        label='Quality of treatment'
                        data={QualityQ3}
                    />
<Label style={styles.customLabel}>4. Reasons for utilization of Govt. Service : </Label>
                    <Dropdown
                        label='Reasons for utilization of Govt. Service  '
                        data={ReasonsQ4}
                    />
<Label style={styles.customLabel}>5. Awareness about health insurance : </Label>
                    <Dropdown
                        label='Awareness about health insurance  '
                        data={AwarenessQ5}
                    />
<Button style={styles.button1} 
            onPress={console.log("Okay")}>
            <Text 
            style={{ color: "blue", fontSize: 17,justifyContent:"center",alignItem:"center",start:wp('11%') }}>Submit</Text>
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
export default SurveyXVIII;