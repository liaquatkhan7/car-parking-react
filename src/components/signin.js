import React, {Component} from 'react';
import * as firebase from 'firebase';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};


class Signin extends Component {
    constructor(e){
        super(e);
        this.state = {
            email: '',
            pass: ''
        }
    }
    
    signin(e){
        let email = this.state.email;
        let pass = this.state.pass;
        firebase.auth().signInWithEmailAndPassword(email, pass).then( (result) => {
            alert('Signin Sucessful');
            console.log(result);
            this.props.history.push('/parking');
        }).catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }

    render(){
        return (
            <div className='App'>
                <AppBar
                    title="Welcome To Sign in Page"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                
                <h1 className='neon'>Sign in</h1>
                
                <TextField
                    floatingLabelText="Enter Your Email"
                    onChange={ evt => this.setState({email: evt.target.value}) }/><br/>
                
                <TextField
                    floatingLabelText="Enter Your Password"
                    onChange={ evt => this.setState({pass: evt.target.value}) }/><br/><br/>
                
                <RaisedButton label="SIGNIN" secondary={true} style={style} onClick={this.signin.bind(this)} />

                {/*<input type="email" placeholder='Email' onChange={ evt => this.setState({email: evt.target.value}) } /> <br/>*/}
                {/*<input type="password" placeholder='Password' onChange={ evt => this.setState({pass: evt.target.value}) }/> <br/>*/}
                {/*<button onClick={this.signin.bind(this)}>SIGNIN</button>*/}
                
            </div>
        )
    }
}

export default Signin;