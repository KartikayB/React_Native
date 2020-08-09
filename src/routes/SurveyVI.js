import React from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';

class SurveyVI extends React.Component {

    constructor(props) {
        super(props);
        this.state =({
          radio1e:false,
          radio2e:false,
          radio1v:false,
          radio2v:false,
          radio1b:false,
          radio2b:false,
          
        });
      }  

      SurveyVII()
      {
        Actions.SurveyVII()
      }
    
  SurveyIV()
  {
    Actions.SurveyIV()
  }

  radio1_e(){
      this.setState({
          radio1e:true,
          radio2e:false,
      })
  }

  radio2_e(){
    this.setState({
        radio1e:false,
        radio2e:true,
    })
}

radio1_v(){
    this.setState({
        radio1v:true,
        radio2v:false,
    })
}

radio2_v(){
  this.setState({
      radio1v:false,
      radio2v:true,
  })
}

radio1_b(){
    this.setState({
        radio1b:true,
        radio2b:false,
    })
}

radio2_b(){
  this.setState({
      radio1b:false,
      radio2b:true,
  })
}

  render() {
    let house = [{
        value: 'Thatched',
      }, {
        value: 'Tiled',
      }, {
        value: 'Terraced',
      }];

    let ownership = [{
        value: 'Owned',
      }, {
        value: 'Rented',
      }];

    let Rooms = [{
        value: 'One',
      }, {
        value: 'Two',
      },{
      value: 'Three',
    }, {
      value: 'Four',
    }];

    let water = [{
        value: 'Own',
      }, {
        value: 'Panchayat well',
      },{
      value: 'Municipal Tap',
    }];
    
    return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyIV}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold",start:wp('25%')}}>VI. HOUSING CONDITION </Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}

<ScrollView>

<Label style={styles.customLabel}>1. Type of House : </Label>
                    <Dropdown
                        label='Type of House'
                        data={house}
                    />
<Label style={styles.customLabel}>2. Ownership : </Label>
                    <Dropdown
                        label='Ownership'
                        data={ownership}
                    />
<Label style={styles.customLabel}>3. Number of Rooms : </Label>
                    <Dropdown
                        label='Rooms'
                        data={Rooms}
                    />
<Label style={styles.customLabel}>4. Electrified : </Label>
<View style={{flexDirection: 'row',top:hp('-1%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1e}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_e()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2e}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_e()} }>
            
            </Radio>
       </View>
<Label style={styles.customLabel}>5. Ventilated : </Label>
<View style={{flexDirection: 'row',top:hp('-1%'), start:wp("6%")}}>

        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1v}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_v()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2v}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_v()} }>
            
            </Radio>
       </View>
<Label style={styles.customLabel}>6. Bathroom/Latrine : </Label>
<View style={{flexDirection: 'row',top:hp('-1%'), start:wp("6%")}}>

        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1b}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_b()} }>
            
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2b}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_b()} }>
            
            </Radio>
       </View>
<Label style={styles.customLabel}>7. Drinking water : </Label>
                    <Dropdown
                        label='Drinking Water'
                        data={water}
                    />


<Button style={styles.button1} 
            onPress={this.SurveyVII}>
            <Text 
                        style={{ color: "blue", fontSize: 17,justifyContent:"center",alignItem:"center", start:wp("12.5%") }}>Next</Text>

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
  
inputBox2: {
    width: wp('70%'),
    maxHeight: hp('7.5%'),
	  borderColor: '#D3D3D3',
    borderWidth: 1,
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
export default SurveyVI;