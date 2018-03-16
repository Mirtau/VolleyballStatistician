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
      <div>
        <MuiThemeProvider>
          <div>
            <h1 className="dig">Dig</h1>
            <button className="links" id = 'Dig'><Link to="/StatRecorded">Dig</Link></button>
            <button className="links" id = 'Fault'><Link to="/StatRecorded">Fault</Link></button>
            </div>
        </MuiThemeProvider>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Dig
