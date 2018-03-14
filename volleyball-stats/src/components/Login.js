import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Redirect } from 'react-router-dom'
import { Toaster, Intent } from '@blueprintjs/core'
import { app, facebookProvider} from '../base'

class Login extends Component {
constructor(props) {
  super(props)
  this.authWithFacebook = this.authWithFacebook.bind(this)
  this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  this.state = {
    redirect: false,
  username: '',
  password: ''
  }
 }

 authWithFacebook() {
   app.auth().signInWithPopup(facebookProvider)
   .then((result, error)=>{
     if(error){
       this.toaster.show({intent: Intent.Danger, message: 'Unable to sign in with Facebook'})
     }else{
       this.setState({redirect: true})
     }
   })
 }
 authWithEmailPassword(event) {
   event.preventDefault()
   console.table([{
     email: this.refs.email.value,
     password: this.passwordInput.value
   }]);
 }

render() {
  if (this.state.redirect === true) {
    return <Redirect to ='/' />
  }
  return(
    <div>
      <MuiThemeProvider>
        <div>
          <h3 className="login">Login</h3>

        <input
            hintText="Enter your Email"
            floatingLabelText="Email"
            ref = 'email'
            />
            <br/>
             <input
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               ref = {(input) => {this.passwordInput = input }}
             />

             <br/>
              <RaisedButton label="Submit" backgroundColor='grey' textcolor='blue' style={style} onClick={(event) =>
              this.authWithEmailPassword(event)} ref = {(form)=> {this.loginForm = form}} />
               <br/>
               <RaisedButton label="Login with Facebook" backgroundColor='grey' textcolor='blue' style={style} onClick={() => this.authWithFacebook()}/>
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
export default  Login
