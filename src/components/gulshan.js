import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
const style = {
  margin: 12,
};


class Gulshan extends Component {
    render(){
        return(
            <div>
                <Paper  zDepth={2}>
                <h2>Book Parking Slot</h2>
                <TextField
                    floatingLabelText="Your Name"/>
                <br/>
                <TextField
                    floatingLabelText="Your Car"/>
                <br/>
                <p>Booking Date</p>
                <input type='date'/>
                <p>Time Start</p>
                <input type='time'/>
                <p>Time End</p>
                <input type='time'/><br/>
                </Paper>

                <h4>Parking slots Gulshan</h4>
                <RaisedButton label="Slot 1" primary={true} style={style} />
                <RaisedButton label="Slot 2" primary={true} style={style} />
                <RaisedButton label="Slot 3" primary={true} style={style} />
                <RaisedButton label="Slot 4" primary={true} style={style} />
                <RaisedButton label="Slot 5" primary={true} style={style} />
                <RaisedButton label="Slot 6" primary={true} style={style} />
                <RaisedButton label="Slot 7" primary={true} style={style} />
                <RaisedButton label="Slot 8" primary={true} style={style} />
                <RaisedButton label="Slot 9" primary={true} style={style} />
                <RaisedButton label="Slot 10" primary={true} style={style} />
            </div>
        )
    }
}

export default Gulshan;