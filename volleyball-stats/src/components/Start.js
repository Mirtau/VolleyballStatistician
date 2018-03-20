import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './start.css'

import { Link } from 'react-router-dom'
class Start extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className='container'>
      <div className='box' id='fade'>
        <img className='playerphoto'  src={require("../comimages/kaileyserve.jpg")}/>
        <MuiThemeProvider>
          <div>
            <table className="start">
            <h2 className='player'>Jenni Tomzac</h2>
            <h3>Fighting Figs</h3>
            <h3 className='font-effect-fire-animation'>vs</h3>
            <h3>Lazy Cats</h3>
            <h3>03/13/2018</h3>
            </table>
          </div>
              <Link to='/Score' className="tolinks"><button className='sbutton' >Start Scoring</button></Link>
              <Link to='ViewStats' className='tolinks'><button className='sbutton'>See Stats</button></Link>
        </MuiThemeProvider>
      </div>
    </div>
    )
  }
  }

export default Start
