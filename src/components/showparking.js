import React,{Component} from 'react';
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import Saddar from './saddar';
import North from './north';
import Gulshan from './gulshan'

const style = {
  margin: 12,
};

class Showpakring extends Component {
    constructor(){
        super();
        this.state = {
            value: '',
            north: false,
            gulshan: false,
            saddar: false
        } 
    }
    
    signout(e){
        firebase.auth().signOut().then(() => {
            console.log('Signed Out');
            this.props.history.push('/');
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.value === 'north'){
            this.setState({north:true})
            alert('North Selected');
        }
        else if(this.state.value === 'gulshan'){
            this.setState({gulshan: true});
            alert('Gulshan Selected');
        }
        else if(this.state.value === 'saddar'){
            this.setState({saddar: true});
            alert('Saddar Selected');
        }
        else if(this.state.value === ''){alert('Please Select Area')}
    }

    render(){
        if(this.state.saddar){
            return (
            <div className='App'>
                <AppBar
                title={ <span>Car Parking</span> }
                iconElementRight={<FlatButton label="Sign out" onClick={this.signout.bind(this)} />} />
                <Saddar />
            </div>
            )
        }

        else if(this.state.north){
            return (
            <div className='App'>
                <AppBar
                title={ <span>Car Parking</span> }
                iconElementRight={<FlatButton label="Sign out" onClick={this.signout.bind(this)} />} />
                <North />
            </div>)
        }

        else if(this.state.gulshan){
           return (
           <div className='App'>
                <AppBar
                title={ <span>Car Parking</span> }
                iconElementRight={<FlatButton label="Sign out" onClick={this.signout.bind(this)} />} />
                <Gulshan />
           </div>
           )
        }

        else{
        return(
        <div className='App'>
            <AppBar
                title={ <span>Car Parking</span> }
                iconElementRight={<FlatButton label="Sign out" onClick={this.signout.bind(this)} />} />
        <h2>Select Parking Location</h2>
        <select value={this.state.value} onChange={(evt) => this.setState({value: evt.target.value}) }>
            <option>Select Location</option>
            <option value="gulshan">Gulshan</option>
            <option value="north">North</option>
            <option value="saddar">Saddar</option>
        </select><br/>
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="Secondary" secondary={true} style={style} />
            {/*<button onClick={this.handleSubmit.bind(this)}>select</button>*/}
        </div>)}
    }
}

export default Showpakring;