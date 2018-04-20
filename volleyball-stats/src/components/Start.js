import React, {Component} from 'react'
import './main.css'
import 'normalize.css'
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
      <div className='startbox'>
        <img className='playerphoto'  src={require("../comimages/kaileyserve.jpg")}/>

          <div>
            <table className="start">
            <h2 className='player'>Jenni</h2>
            <h3>Fighting Figs</h3>
            <h3 className= 'vs'>vs</h3>
            <h3>Lazy Cats</h3>
            <h3>03/21/2018</h3>
            </table>
          </div>
              <Link to='/Score' ><button className='sbutton' >Start Scoring</button></Link>
              <Link to='/ViewStats' id ='gap'><button className='sbutton'>See Stats</button></Link>

      </div>
    </div>
    )
  }
  }

export default Start
