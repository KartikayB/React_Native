import React from "react"
import {View, Text, StyleSheet,AsyncStorage,Image,Modal } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'
import {Actions} from 'react-native-router-flux'
import {Button,Icon, Content,Root,Container,Header,Footer,Body,Thumbnail,Left,Right,Form} from 'native-base'
import Dots from 'react-native-dots-pagination';

class UserCategoryScreen extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
           
            active: 0,
            modalVisibility: false,
            modalText: "C-FootPrint is the amount of Gaseous Emissions that causes Climate change. It is the measure of the exclusive Total amount of CO2 Emissions that is directly and indirectly caused by an activity or is accumulated over the Life stages of a Product."
          
        }

    }

   
    showInfoModal = (val) =>{
        this.setState({
            modalVisibility: val
        })
    }

    render(){
        return(
            <Root>
                <Container  style={[styles.container, this.state.modalVisibility ? {opacity: 0.5} :'' ]}>
                    <Header transparent style={{ backgroundColor: "white" }}>
                        <Left>
                            <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
                                onPress= {() => { Actions.drawerOpen();}}
                            > 
                                <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
                                            source={require('../../util/images/person_icon.png')}
                                />
                            </Button>
                        </Left>
                        <Right >
                            <Button transparent style={{backgroundColor:"white", paddingTop:hp('5%')}} 
                                onPress= {() => {this.showInfoModal(true) }}
                            > 
                                <Thumbnail style={{width: wp('9.5%'), height: hp('6.5%')}}
                                    source={require('../../util/images/info_icon.png')}
                                />
                            </Button>
                        </Right>
                    </Header>
                   
                        <View>
                            <Image style={{width: "100%",height: hp('35%'), resizeMode: 'contain'}}
                                source={require('../../util/images/ucatg/user_catg_img.png')}
                            />
                        </View>
                
                        <Text style={{fontSize:hp('3%'),fontWeight: "bold",alignSelf: 'auto',marginLeft: wp('2%'),marginTop: hp('1%') }}>
                            Category Selection
                        </Text>
                        <Text style={{fontSize:hp('2.25%'), alignSelf: "auto",marginLeft: wp('2%')}}>
                            Select the category you belong to - Choose atleast one option
                        </Text>
                       
                            <View style={{flexDirection: 'row',marginTop:hp('3%'),justifyContent:'center'}}>
                                <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC01").then( () =>{console.log("First Category")} ) }}> 

                                    <Thumbnail style={{marginHorizontal: wp('15%')}}                         
                                        source={require('../../util/images/ucatg/individual.png')}
                                    />
                                </Button>
                                <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC02").then( () =>{console.log("Second Category")} ) }}> 
                                    <Thumbnail style={{marginHorizontal: wp('15%'),}}
                                        
                                        source={require('../../util/images/ucatg/school.png')}
                                    />
                                </Button>
                            </View>
                            <View style={{flexDirection: 'row',justifyContent:'center'}}>
                                <Text style={{fontSize:hp('2.5%'),marginHorizontal: wp('14%'),marginTop: hp('1%')}}>Individual</Text>
                                <Text style={{fontSize:hp('2.5%'),marginHorizontal: wp('15%'),marginTop: hp('1%')}}>School</Text>
                            </View>
                            <View style={{flexDirection: 'row',marginTop:hp('3%'),justifyContent:'center'}}>
                                <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC03").then( () =>{console.log("Third Category")} ) }}> 

                                    <Thumbnail  style={{marginHorizontal: wp('15%')}}  
                                        
                                        source={require('../../util/images/ucatg/hotel.png')}
                                    />
                                </Button>
                                <Button transparent onPress= {() => { AsyncStorage.setItem("UserCategory", "UC04").then( () =>{console.log("Fourth Category")} ) }}> 
                                    <Thumbnail  style={{marginHorizontal: wp('15%')}}  
                                        
                                        source={require('../../util/images/ucatg/corporate.png')}
                                    />
                                </Button>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{fontSize:hp('2.5%'),marginHorizontal: wp('24%'),marginTop: hp('1%')}}>Hotel</Text>
                                <Text style={{fontSize:hp('2.5%'),marginHorizontal: wp('4%'),marginTop: hp('1%')}}>Corporate</Text>
                            </View>
                      
                    
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
                                    <Text style={{fontSize:hp('3%'),fontFamily:'Arial',textAlign: "center", }}>{this.state.modalText}</Text>
                                    <Button transparent title="Close" onPress={() => { this.showInfoModal(!this.state.modalVisibility)} }>
                                        <Text style={{fontSize:hp('3.5%'), fontFamily:'Arial',textAlign: "center", color:"#8fbb2d", fontWeight: "600", top: hp('2%')}}>Close</Text>
                                    </Button>
                                </View>
                            </View>
                        </Modal>
                    </View>
            <Footer  style={{backgroundColor: "#white" ,display:"flex", marginTop: hp('-2%')  }}>
                
                        <Left />
                        <Body>
                            <View style={{left:wp('2.5%') }}>
                                <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
                            </View>
                        </Body>
                        <Right>
                            <Button transparent style={{backgroundColor:"white" }} 
                                onPress= {() => {Actions.travelcategory(); }}> 
                                
                                <Text style = {{color: "#99cc00", fontSize:hp('3.5%')}}> Next</Text> 
                                <Icon name='ios-arrow-forward' style={{ color: "#99cc00",fontSize: hp('5%')}} /> 
                            </Button>
                                
                        </Right>
           
          </Footer>
        </Container>
    </Root>
        )
    }
}

export default UserCategoryScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        height:hp('100%'),
        width: wp('100%')
    },

    modalInsideView:{
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor : "white", 
        height: hp('50%') ,
        width: wp('90%'),
        borderRadius:hp('3.5%'),
        borderWidth: hp('1%'),
        borderColor: '#8fbb2d',
       
    }
})


/*

<View style={{left:wp('2.5%'), top:hp('1%')}}>
                        <Dots  length={6} active={this.state.active} activeColor={"#99cc00"} />
                    </View>

                    */