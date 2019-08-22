
import React, {Component} from 'react';
//import the redux and connector comps (applymiddleware for redux thunk)
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Inputs, Button, Card, CardSection, Spinner } from '../Components/Common';
import {View, Text} from 'react-native';


class LoginForm extends Component{

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        console.log(email,password,this.props.error);
        this.props.loginUser({email, password});
    }

    renderError(){
        if(this.props.error)
        {
            return(
                <View style={{backgroundColor:'white'}}>
                    
                </View>
                )
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='small' />
        }

        return(<Button onPress={this.onButtonPress.bind(this)}>Login</Button>)
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Inputs label="email"
                     placeholder="email@gmail.com" 
                     onChangeText={this.onEmailChanged.bind(this)} 
                     value = {this.props.email}
                      //this email comes from mapStateToProps key value from the connector from reducer
                     />
                </CardSection>
                
                <CardSection>
                    <Inputs label="password"
                     secureTextEntry
                      placeholder="password" 
                      onChangeText ={this.onPasswordChanged.bind(this)}
                      value = {this.props.password}
                      />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
    
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

const mapStateToProps = (state) =>{
    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
} 

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);