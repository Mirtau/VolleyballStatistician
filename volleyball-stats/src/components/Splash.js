import React, {Component} from 'react'
import './main.css'
import './Splash.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Splash extends Component {
constructor(props) {
  super(props);
  this.state = {
  }
 }

render() {
  return(
    <div>
      <MuiThemeProvider>
        <div>
          <p className="splash">Welcome to Volleyball Statistician</p>
          <p className="disclaimer">Thank you for choosing volleyball statistician.  Please remember that sports stats can be subjective and your stats may not match the offical scorer</p>

          <Link to='/start' className="tolinks"><button className='starter'>Begin</button></Link>
         </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

export default Splash
