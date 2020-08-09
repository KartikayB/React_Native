import React from 'react'
import {  StyleSheet,Image,View} from 'react-native'
import * as firebase from "firebase"
import "@firebase/firestore"
import {firebaseApp,firestoreDB} from '../../util/Firebase'
import {Form, Icon, Container, Header, InputGroup, Input, Content, Footer, FooterTab, Button,Text, Left, Item,Label} from 'native-base';
import { Actions, Modal } from 'react-native-router-flux'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { YellowBox } from 'react-native';
import Spinner from '../components/Spinner'

const signupImg = require('../../util/images/signupscreen_image.png')

class SignUpScreen extends React.Component {

	constructor(props){
		super(props)
		this.state= ({
			email: '',
			password:'',
			rpassword:'',
			firstname:'',
            lastname: '',
            loading: false,
            register: false
		});
	}

    componentDidMount() {
        lor(this);
      }
      
      componentWillUnmount() {
        rol();
      }


goback() {
	Actions.pop()
}	

handleSignUp = async () => {

        if (!this.checkFields()){
            alert("All fields are mandatory")
            return false
        }

        if (this.passwordcheck()){
			const{
				email, 
				password, 
				firstname, 
				lastname
            }= this.state;
            
            this.setState({loading: true})
			await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
				.then( (response) => {
			if (response.user.uid) {
					const user = {
	                    usrId: response.user.uid,
						usrEmail: email,
						usrFName: firstname,
						usrLName: lastname,
						usrProviderId: response.additionalUserInfo.providerId,
						cfpVal:false
                    }
                    
					firebaseApp.firestore().collection('users')
					.doc(response.user.uid)
                    .set(user)
                    .then(()=> {
                        
                        this.updateDName();
                        const dsName = firstname.concat(' ',lastname)
                        if(this.state.register && !this.state.loading){
                            console.log('User registration successful')
                        }
                        this.navigateNext(dsName);
                    })
				}
			}).catch((error) => {
                alert("Error is: "+ error)
                console.log(error)
                this.setState({loading: false})
        })
            
            
			
		 }else{
			alert("Password doesn't match")}
}

checkFields(){
    const {email,password, rpassword,firstname,lastname} = this.state
    
    if(email !== '' && password !=='' && rpassword !== '' && firstname !== '' && lastname !== ''){
        return true;
    }
        
    return false;
}

updateDName = async () => {

    var user = firebaseApp.auth().currentUser;

    await user.updateProfile({
        displayName: this.state.firstname.concat(' ',this.state.lastname)
    }).then(()=>{
        this.setState({register: true,loading: false})
    })
    
    return;
}	

navigateNext(name){

    //navigate to C-Footprint Display page
    Actions.cfpdisplay({dName: name});
}
	
passwordcheck(){
	const {password, rpassword} = this.state
	if (password !== rpassword) {
			return false}
			else { return true}
}

handleLoading(){ // Load Spinner  or the Register Button 

    
    if(this.state.loading){
        return(
            <Spinner />
        )
    }

    return(
        <Button 
			style={styles.regBtn} 
			onPress={this.handleSignUp}>
			<Text style={{ color: "#fff", fontSize: hp('3.5%') }}>Register</Text>
		</Button > 
    );
}
	

	
render() {

    //Styles included in render() method - to support responsiveness along with orientation change.

    
    
	return (
            <Container style={{ height: hp('100%')}}>

            <Header style={{backgroundColor: "#8fbb2d",height: hp('7%')}} />
                <Content style={styles.content} >  
                <Image
                    style={{width: wp('100%'), height: hp('20%'), resizeMode: "contain" }}
				    source={require('../../util/images/signupscreen_image.png')}
                 />
                    <Text style={{fontSize: 30, textAlign: "center",marginTop: hp('2%')}}> Create Account</Text>
                   <Form style={{ width :wp('80%'), height: hp('47%'), alignSelf: "center",marginTop: hp('2%') }}
                   
                   >

                  
                   
                    <Item style={styles.itemStyle}>
                        <Label  style={styles.customLabel}>First Name</Label>
                        <Input ref='fname'
                            value={this.state.firstname}
                            onChangeText={(firstname)=>this.setState({firstname: firstname })}
                            
                            autoCapitalize='none'
                        />
                    </Item>
					<Item  style={styles.itemStyle}>
                        <Label  style={styles.customLabel} >Last Name</Label>
                        <Input
                            value={this.state.lastname}
                            onChangeText={(lastname)=> this.setState({lastname: lastname })}
                           
                            autoCapitalize='none'
                        />
                    </Item>
                    <Item style={styles.itemStyle}>
                        <Label style={styles.customLabel}>Email Address</Label>
                        <Input 
                            value={this.state.email}
                            onChangeText={(email)=> this.setState({email: email})}
                           
                            autoCapitalize='none'
                        />
                    </Item>
					<Item style={styles.itemStyle}>
                        <Label style={styles.customLabel}>Password</Label>
                        <Input
                            value={this.state.password}
                            onChangeText={(password)=>this.setState({password: password})}
                           
                            secureTextEntry={true}
                          
                            autoCapitalize='none'
                        />
                    </Item>
					<Item style={styles.itemStyle}>
                        <Label style={styles.customLabel}>Confirm Password</Label>
                        <Input
                            value={this.state.rpassword}
                            onChangeText={(rpassword)=>this.setState({rpassword:rpassword })}
                          
                            secureTextEntry={true}
                           
                            autoCapitalize='none'
                        />
                    </Item>
					
					
                    <View>
                        {this.handleLoading()}
                    </View>
					
                    </Form> 
				</Content>
			    <Footer style={{backgroundColor: "#8fbb2d",height: hp('7%')}}>
				  <FooterTab style={{backgroundColor: "#8fbb2d"}}>
					<Button full  onPress={this.goback}>
					  
						<Icon 
							name="ios-arrow-back" 
							style={{ color: "#fff", fontSize: 20 }}>
							<Text style={{ color: "#fff", fontSize: 20}}>  Back</Text></Icon>
					 
					 </Button>
				  </FooterTab>
				  </Footer>
			  </Container>
			);
	}
}

const styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        height: hp('93%'),
        marginTop: hp('2.5%'),
        
      },
      itemStyle: {
        
        borderColor: '#8fbb2d',
        borderBottomWidth: wp('0.5%'),
        
      },
      regBtn: {
        marginTop:wp('4.5%'), 
        width: wp('50%'),
        justifyContent:"center",
        alignSelf: "center",
        backgroundColor:"#8fbb2d",
        borderRadius: hp('5%')
      },
      customLabel: {
          marginRight: wp('2.5%')
      }
        
    });



    
export default SignUpScreen;


