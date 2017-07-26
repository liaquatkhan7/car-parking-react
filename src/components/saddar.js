import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class Saddar extends Component {
    render(){
        return(
            <div>
                <h1>Parking Slots Saddar </h1>
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

export default Saddar;