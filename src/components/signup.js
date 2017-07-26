import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import '../App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Signup extends Component {
    constructor(e){
        super(e);
        this.state = {
            name:'',
            email:'',
            password:'',
            phone:'',
        }
    }

    signup(e){
        e.preventDefault();
        let name = this.state.name
        let email = this.state.email;
        let pass = this.state.password;
        let phone = this.state.phone;

        firebase.auth().createUserWithEmailAndPassword(email, pass).then((user) => {
            firebase.database().ref('users/' + firebase.auth().currentUser.uid ).set({
                name: name,
                phone: phone,
            }).then( (e) => { 
                this.props.history.push('/parking'); 
            })
                alert('sucessfully singed up');
            }).catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage); 
    });
    }

    render(){
        return (
            <div className='App'>

            <AppBar
                title="Welcome To Sign Up Page"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>
            <br/>

            <TextField
                floatingLabelText="Enter Name"
                onChange={ evt =>  this.setState({name: evt.target.value})}
            />
            <br/>
            <TextField
                floatingLabelText="Enter Email"
                onChange={ evt =>  this.setState({email: evt.target.value})}
            />
            <br/>
            <TextField
                floatingLabelText="Enter Password"
                onChange={ evt =>  this.setState({password: evt.target.value})}
            />
            <br/>
            <TextField
                floatingLabelText="Enter Phone Number"
                onChange={ evt =>  this.setState({phone: evt.target.value})}
            />
            <br/>
            <RaisedButton label="SIGNIN" secondary={true} style={style} onClick={this.signup.bind(this)} />
            </div>
        )
    }
}

export default Signup;