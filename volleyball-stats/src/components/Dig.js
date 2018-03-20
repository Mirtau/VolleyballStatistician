import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class Dig extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className = 'container'>
      <div className ='box'>
        <MuiThemeProvider>
          <div>
            <h1 className="dig">Dig</h1>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'Dig'>Dig</button></Link>
            <Link to="/StatRecorded" className="tolinks"><button className="links" id = 'Fault'>Fault</button></Link>
            </div>
        </MuiThemeProvider>
      </div>
    </div>
    )
  }
  }

export default Dig
