import React, {Component} from 'react'
import { Spinner } from '@blueprintjs/code'

class Logout extends Component {
  render() {
    return (
      if(this.state.redirect === true){
        return redirect to = '/Login'
      }
      return(
        <div style ={{textAlign: 'center', position: 'absolute', top: '25%', left: '50%'}}>
          <h3>Logging Out</h3>
          <Spinner />
        </div>
      )
    )
  }
}
