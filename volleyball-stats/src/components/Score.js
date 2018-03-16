import React, {Component} from 'react'
import './main.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
            <button className="links" id = 'serve'><Link to="/Serve">serve</Link></button>

              <button className="links" id = 'receive'><Link to='/Receive'>receive</Link></button>

              <button className="links" id ='set'><Link to="/Set">Set</Link></button>

              <button className="links" id = 'attack'><Link to='/Attack'>Attack</Link></button>

              <button className="links" id = 'block'><Link to='/Block'>Block</Link></button>

              <button className="links" id = 'dig' ><Link to='/Dig'>Dig</Link></button>

          </div>
        </MuiThemeProvider>
      </div>
      </div>
    )
  }
  }
  const style = {
    margin: 15,
}
export default Score
