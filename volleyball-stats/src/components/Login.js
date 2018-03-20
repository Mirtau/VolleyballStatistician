import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
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
  }
 }

 authWithFacebook() {
   app.auth().signInWithPopup(facebookProvider)
   .then((result, error)=> {
      console.log('result', (result.user.email));

   fetch('http://localhost:3001/users/', {
         method: 'Post',
         body: JSON.stringify({
           name: result.user.displayName,
           email: result.user.email,
           password: result.credential.accessToken
         })
      }).then(res => res.json())
      .catch(error => console.error('error', error))
      .then(response =>console.log('Success:', response))

     if(error) {
       this.Toaster.show({intent: Intent.Danger, message: 'Unable to sign in with Facebook'})
     }
     else {
       this.setState({redirect: true})
     }
   })
 }
 authWithEmailPassword(event) {
   event.preventDefault()
   const email = this.emailInput.value
   const password = this.passwordInput.value

   app.auth().fetchProvidersForEmail(email)
   .then((providers) => {
     if(providers.length === 0) {
        //create user
        return app.auth().createUserWithEmailAndPassword(email, password)

    }
     else if (providers.indexof('password') === -1) {
       this.Toaster.show({intent: Intent.WARNING, message: 'try alternative login'})
     }
     else {
       //sign user in
       return app.auth().signinWithEmailAndPassword(email, password)
    }
    })
    .then((user) => {
      if(user && user.emal) {
        this.loginForm.reset()
        this.setState({redirect: true})
      }
  })
   .catch((error) => {
     //this.Toaster.show({intent: Intent.Danger, message: error.message})
   })
 }

render() {
  if (this.state.redirect === true) {
    return <Redirect to ='/NewPlayer' />
  }
  return(
    <div>
      <Toaster ref = {(element) => {this.Toaster = element}} />
      <MuiThemeProvider>
        <div>
          <form>
          <h3 className="login">Login</h3>

        <input
            type= 'email'
            ref = {(input) => {this.emailInput = input }}
            />
            <br/>
             <input
               type="password"

               ref = {(input) => {this.passwordInput = input }}
             />

             <br/>
              <RaisedButton label="Submit" backgroundColor='grey' textcolor='blue' style={style} onClick={(event) =>
              this.authWithEmailPassword(event)} ref = {(form)=> {this.loginForm = form}} />
               <br/>
               <RaisedButton label="Login with Facebook" backgroundColor='grey' textcolor='blue' style={style} onClick={() => this.authWithFacebook()}/>
                <br/>
                </form>
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
