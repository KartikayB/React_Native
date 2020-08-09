import React, {Component} from 'react'
import { StyleSheet, View, Text , Modal, Content } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container,Input, Header,Icon,Button,Left,Right,Footer,FooterTab,Label,Radio,CheckBox } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { ScrollView } from 'react-native-gesture-handler';
import MultiSelect,{getSelectedItemsExt} from 'react-native-multiple-select';

class SurveyXVII extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =({
          selectedLang1:false,
          selectedLang2:false,
          selectedLang3:false,
          selectedLang4:false,
          selectedLang5:false,
          selectedLang6:false,
          selectedLang7:false,
          selectedLang8:false,
          Q13a:false,
          Q13b:false,
          Q13c:false,
          Q13d:false,
          Q13e:false,
          Q13f:false,
          Q13g:false,
          Q13h:false,
          Q13i:false,
          Q13j:false,
          radio1_1:false,
          radio2_1:false,
          radio1_3:false,
          radio2_3:false,
          radio1_4:false,
          radio2_4:false,
          radio1_5:false,
          radio2_5:false,
          radio1_6:false,
          radio2_6:false,
          radio1_7:false,
          radio2_7:false,
          radio1_9:false,
          radio2_9:false,
          radio1_10:false,
          radio2_10:false,
          radio1_11:false,
          radio2_11:false,
          Q1:'',
          Q2:'',
          Q5yes:'',
          Q5no:'',
          Q6:'',
          Q7:'',
          Q8:'',
          Q9:'',
        });
      }  

      SurveyXVI()
      {
        Actions.SurveyXVI()
      }
    
  SurveyXVIII()
  {
    Actions.SurveyXVIII()
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
      radio2_4:true,
      
  })
}

radio1_5(){
    this.setState({
        radio1_5:true,
        radio2_5:false,
        
    })
}

radio2_5(){
  this.setState({
      radio1_5:false,
      radio2_5:true,
      
  })
}

radio1_6(){
    this.setState({
        radio1_6:true,
        radio2_6:false,
        
    })
}

radio2_6(){
  this.setState({
      radio1_6:false,
      radio2_6:true,
      
  })
}

radio1_7(){
    this.setState({
        radio1_7:true,
        radio2_7:false,
        
    })
}

radio2_7(){
  this.setState({
      radio1_7:false,
      radio2_7:true,
      
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




items12 = [{
    id: '1',
    name: 'Food Security',
  }, {
    id: '2',
    name: 'Nutritional Security',
  }, {
    id: '3',
    name: 'Health Security',
  }, {
    id: '4',
    name: 'Housing Security',
  }, {
    id: '5',
    name: 'Employment Security',
  }, {
    id: '6',
    name: 'Income Security',
  }, {
    id: '7',
    name: 'Life and Accident Security',
  }, {
    id: '8',
    name: 'Old Age Security',
  }];


items13 = [{
    id: '1',
    name: 'Social Problem',
  }, {
    id: '2',
    name: 'Family Problem',
  }, {
    id: '3',
    name: 'Eduational Problem',
  }, {
    id: '4',
    name: 'Health Problem',
  }, {
    id: '5',
    name: 'Housing Problem',
  }, {
    id: '6',
    name: 'Entertainment Problem',
  }, {
    id: '7',
    name: 'Addiction problem',
  }, {
    id: '8',
    name: 'Economic Problem',
  }, {
    id: '9',
    name: 'Professional Problem',
  }, {
    id: '10',
    name: 'Other Problem',
  }];
  
  items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];
 

  render() {
    const {selectedLang1,selectedLang2,selectedLang3,selectedLang4, selectedLang5,selectedLang6,selectedLang7,selectedLang8} = this.state
    const {Q13a, Q13b, Q13c, Q13d, Q13e, Q13f, Q13g, Q13h, Q13i, Q13j} = this.state
    return (
        <Container>
        <Header transparent style={{ backgroundColor: "white" }}>
          
        <Left>
        <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%'), left:wp('-0.5%')}} 
        onPress= {this.SurveyXVI}> 
       
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
          <Text style={{color: 'white', fontWeight:"bold", start:wp("35%")}}>XVII.	COMMON</Text>
        </LinearGradient>
        </View>
    </Header>
{/* <Text style={{fontWeight: "bold", fontSize:hp('2%')}}>1.	Date of Interview	: </Text> */}
<ScrollView>
<Label style={styles.customLabel}>1. Does your work affect your health?</Label>
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
<Label style={styles.customLabel}>2. What part of the work cause problem? </Label>
                    <Input
						value={this.state.Q2}
						onChangeText={(Q2)=>this.setState({Q2})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>3. Do you have medical facilities at your workplace?</Label>
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
<Label style={styles.customLabel}>4. Is there any rest room for the women in the factory?</Label>
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
<Label style={styles.customLabel}>5. Is there worker's Union at your workplace?</Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_5}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_5()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_5}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_5()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>If 'Yes' do you think that the Union has helped to improve the working conditions? </Label>
                    <Input
						value={this.state.Q5yes}
						onChangeText={(Q5yes)=>this.setState({Q5yes})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>If 'No' what is the reason for non-existence of the union?</Label>
                    <Input
						value={this.state.Q5no}
						onChangeText={(Q5no)=>this.setState({Q5no})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>6. Are you a member of the Trade Union?</Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_6}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_6()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_6}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_6()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>If 'No', give reasons </Label>
                    <Input
						value={this.state.Q6}
						onChangeText={(Q6)=>this.setState({Q6})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>7. Is there any improvement in your economic conditions? </Label>
<View style={{flexDirection: 'row',top:hp('-2%'), start:wp("6%")}}>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("2%"),top:wp("4%")}}>Yes</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio1_7}
                style={{start:hp("4%"),top:wp("4%")}}
                onPress= {() => {this.radio1_7()} }>
            </Radio>
        <Text style={{fontSize:hp('2.5%'),fontWeight: "bold", start:hp("10%"),top:wp("4%")}}>No</Text>
        <Radio color={"#99cc00"}
                selectedColor={"#99cc00"}
                selected={this.state.radio2_7}
                style={{start:hp("12%"),top:wp("4%")}}
                onPress= {() => {this.radio2_7()} }>
            </Radio>
       </View>
<Label style={styles.customLabel}>If 'Yes', is this improvement because of your income? </Label>
        <Input
						value={this.state.Q7}
						onChangeText={(Q7)=>this.setState({Q7})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>8. What are the problems faced by you in your profession? </Label>
        <Input
						value={this.state.Q8}
						onChangeText={(Q8)=>this.setState({Q8})}
						style={styles.inputBox3}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>9. Are you availing any government welfare scheme? </Label>
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
<Label style={styles.customLabel}>If 'Yes', then name </Label>
        <Input
						value={this.state.Q9}
						onChangeText={(Q9)=>this.setState({Q9})}
						style={styles.inputBox2}
						autoCapitalize='none'
					/>
<Label style={styles.customLabel}>10.	Below Poverty Line </Label>
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
       <Label style={styles.customLabel}>11. Security Assistance </Label>
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
       <Label style={styles.customLabel}>12.	Social Security </Label>

<View>
        <View style={styles.item} >
            <CheckBox checked={selectedLang1} color="#99cc00" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang1?"#99cc00":"gray",
                fontWeight:this.state.selectedLang1? "bold" :"normal"
              }}
              >Food Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang2} color="#99cc00" onPress={()=>this.setState({selectedLang2:!selectedLang2})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang2?"#99cc00":"gray",
                fontWeight:this.state.selectedLang2? "bold" :"normal"
              }}
              >Nutrition Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang3} color="#99cc00" onPress={()=>this.setState({selectedLang3:!selectedLang3})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang3?"#99cc00":"gray",
                fontWeight:this.state.selectedLang3? "bold" :"normal"
              }}
              >Health Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang4} color="#99cc00" onPress={()=>this.setState({selectedLang4:!selectedLang4})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang4?"#99cc00":"gray",
                fontWeight:this.state.selectedLang4? "bold" :"normal"
              }}
              >Housing Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang5} color="#99cc00" onPress={()=>this.setState({selectedLang5:!selectedLang5})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang5?"#99cc00":"gray",
                fontWeight:this.state.selectedLang5? "bold" :"normal"
              }}
              >Employment Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang6} color="#99cc00" onPress={()=>this.setState({selectedLang6:!selectedLang6})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang6?"#99cc00":"gray",
                fontWeight:this.state.selectedLang6? "bold" :"normal"
              }}
              >Income Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang7} color="#99cc00" onPress={()=>this.setState({selectedLang7:!selectedLang7})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang7?"#99cc00":"gray",
                fontWeight:this.state.selectedLang7? "bold" :"normal"
              }}
              >Life And Accident Security</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang8} color="#99cc00" onPress={()=>this.setState({selectedLang8:!selectedLang8})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang8?"#99cc00":"gray",
                fontWeight:this.state.selectedLang8? "bold" :"normal"
              }}
              >Old Age Security</Text>
        </View>
  
      </View>
<Label style={styles.customLabel}>13. Problems Faced by the Workers </Label>
<View style={styles.item} >
            <CheckBox checked={Q13a} color="#99cc00" onPress={()=>this.setState({Q13a:!Q13a})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13a?"#99cc00":"gray",
                fontWeight:this.state.Q13a? "bold" :"normal"
              }}
              >Social Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13b} color="#99cc00" onPress={()=>this.setState({Q13b:!Q13b})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13b?"#99cc00":"gray",
                fontWeight:this.state.Q13b? "bold" :"normal"
              }}
              >Family Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13c} color="#99cc00" onPress={()=>this.setState({Q13c:!Q13c})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13c?"#99cc00":"gray",
                fontWeight:this.state.Q13c? "bold" :"normal"
              }}
              >Educational Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13d} color="#99cc00" onPress={()=>this.setState({Q13d:!Q13d})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13d?"#99cc00":"gray",
                fontWeight:this.state.Q13d? "bold" :"normal"
              }}
              >Health Problem</Text>
        </View>

<View style={styles.item} >
            <CheckBox checked={Q13e} color="#99cc00" onPress={()=>this.setState({Q13e:!Q13e})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13e?"#99cc00":"gray",
                fontWeight:this.state.Q13e? "bold" :"normal"
              }}
              >Housing Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13f} color="#99cc00" onPress={()=>this.setState({Q13f:!Q13f})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13f?"#99cc00":"gray",
                fontWeight:this.state.Q13f? "bold" :"normal"
              }}
              >Entertainment Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13g} color="#99cc00" onPress={()=>this.setState({Q13g:!Q13g})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13g?"#99cc00":"gray",
                fontWeight:this.state.Q13g? "bold" :"normal"
              }}
              >Addiction Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13h} color="#99cc00" onPress={()=>this.setState({Q13h:!Q13h})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13h?"#99cc00":"gray",
                fontWeight:this.state.Q13h? "bold" :"normal"
              }}
              >Economic Problem</Text>
        </View>

<View style={styles.item} >
            <CheckBox checked={Q13i} color="#99cc00" onPress={()=>this.setState({Q13i:!Q13i})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13i?"#99cc00":"gray",
                fontWeight:this.state.Q13i? "bold" :"normal"
              }}
              >Professional Problem</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.Q13j} color="#99cc00" onPress={()=>this.setState({Q13j:!Q13j})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.Q13j?"#99cc00":"gray",
                fontWeight:this.state.Q13j? "bold" :"normal"
              }}
              >Other Problem</Text>
        </View>
<Button style={styles.button1} 
            onPress={this.SurveyXVIII}>
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
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    paddingLeft:35,
    marginTop:5,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  },
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
    width: wp('80%'),
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
export default SurveyXVII;