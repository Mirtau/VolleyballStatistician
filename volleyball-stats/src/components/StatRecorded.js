import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'

class StatRecorded extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className="container">
      <div className='box'>
        <MuiThemeProvider>
          <div>
            <p className='finish'> Stat Recorded !! </p>
              <Link to='/Score' className="tolinks"><button>Score</button></Link>

          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }
export default StatRecorded
