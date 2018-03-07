import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
class Splash extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render(){
  return(
    <div>
      <MuiThemeProvider>
        <div>
          <h3 className="login">Login</h3>
        <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}  />
             <br/>
             <button className='submit-button'
               onClick={(event) => this.handleClick(event)}>Submit</button>
               <br/>
              <button className='signup'>Sign Up</button>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};

export default Splash
