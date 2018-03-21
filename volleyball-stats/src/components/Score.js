import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Link } from 'react-router-dom'
const WebFont = require('webfontloader')

WebFont.load({
    google: {
      families: ['Droid Sans', 'Droid Serif']
    }
  });
class Score extends Component {
constructor(props) {
  super(props)
  // this.scoreClick = this.scoreClick.bind(this)
  this.state = {}
}
// scoreClick(event) {
//   console.log(event.target);
//
// if(event.target === 'serve') {
//   return <Link to = '/Serve'/>
// }
// else if(event.target === 'receive') {
//   return this.setState = '/Receive'
// }
// else if(document.getElementById === 'set') {
//   return <Redirect to = '/Set' />
// }
// else if(document.getElementById === 'attack') {
//   return <Redirect to = '/Attack'/>
// }
// else if(document.getElementById === 'block') {
//   return <Redirect to = '/Block'/>
// }
// else {
//   return <Redirect to = '/Dig'/>
// }
//
// }
  render() {
    return(
      <div className = 'container'>
      <div className ='box'>
        <MuiThemeProvider>
          <div>
            <h1 className="score">Score</h1>
             <Link to="/Serve" className="tolinks"><button className="links" id = 'serve'>Serve</button></Link>

              <Link to='/Receive' className="tolinks"><button className="links"  id = 'receive'>Receive</button></Link>

              <Link to="/Set" className="tolinks"><button className="links" id ='set'>Set</button></Link>

              <Link to='/Attack' className="tolinks"><button className="links" id = 'attack'>Attack</button></Link>

              <Link to='/Block' className="tolinks"><button className="links" id = 'block'>Block</button></Link>

              <Link to='/Dig' className="tolinks"><button className="links" id = 'dig' >Dig</button></Link>

          </div>
          <Link to='/Start' className='finsih'><button>Finish Match</button></Link>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }

export default Score
