import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class Splash extends Component {
constructor(props){
  super(props);
  this.state={
  }
 }

render(){
  return(
    <div>
      <MuiThemeProvider>
        <div>
          <h3 className="splash">Welcome to Volleyball Statistician</h3>
          <h5 className="disclaimer">Thank you for choosing volleyball statistician.  Please remember that sports stats can be subjective <br/>and your stats may not match the offical scorer</h5>
          <h3 className="please">Please login or sign up to begin</h3>
              <RaisedButton label="Login" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
               <br/>
               <RaisedButton label="Sign Up" backgroundColor='grey' textColor='blue' style={style} onClick={(event) => this.handleClick(event)}/>
                <br/>
         </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin: 15,
}

export default Splash
