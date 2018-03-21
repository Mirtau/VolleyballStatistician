import React, {Component} from 'react'
import './viewstats.css'
import './main.css'
import { Link } from 'react-router-dom'
import { Table } from 'react-materialize'

class ViewStats extends Component {
constructor(props) {
  super(props)
  this.state = {}
}
  render() {
    return(
      <div className = 'container'>
      <p className="disclaimer">Thank you for choosing volleyball statistician.  Please remember that sports stats can be subjective and your stats may not match the offical scorer</p>
      <div className ='statbox'>
        <p className = 'seasonhead'>Season Stats</p>
        <table className ='tables' options={{bordered: true}}>
          <thead>
            <p className='label'>Attacks</p>
            <tr>
              <th data-field = 'total'>Total</th>
              <th data-field = 'kills'>Kills</th>
              <th data-field = 'inplay'>In Play</th>
              <th data-field = 'faults'>Faults</th>
              <th data-field = 'kill'>Kill %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>430</td>
              <td>200</td>
              <td>200</td>
              <td>30</td>
              <td>.302</td>
            </tr>
          </tbody>
        {/* </table>
        <table className ='tables'> */}
          <thead>
            <p className='label'>Serves</p>
            <tr>
              <th data-field = 'total'>Total</th>
              <th data-field = 'kills'>Ace</th>
              <th data-field = 'inplay'>In Play</th>
              <th data-field = 'faults'>Faults</th>
              <th data-field = 'kill'>Serve %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>430</td>
              <td>200</td>
              <td>200</td>
              <td>30</td>
              <td>.302</td>
            </tr>
          </tbody>
        {/* </table>
        <table className ='tables'> */}
          <thead>
            <p className='label'>Receives</p>
            <tr>
              <th data-field = 'total'>Total</th>
              <th data-field = '4s'>4's</th>
              <th data-field = '3s'>3's</th>
              <th data-field = '2s'>2's</th>
              <th data-field = '1s'>1's</th>
              <th data-field = 'faults'>faults</th>
              <th data-field = 'receive number'>Receive Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>430</td>
              <td>200</td>
              <td>200</td>
              <td>30</td>
              <td>10</td>
              <td>15</td>
              <td>1.8</td>
            </tr>
          </tbody>
        {/* </table>
        <table className ='tables'> */}
          <thead>
            <p className='label'>Blocks</p>
            <tr>
              <th data-field = 'total'>Total</th>
              <th data-field = 'block'>Block</th>
              <th data-field = 'touch'>touch</th>
              <th data-field = 'faults'>Faults</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>430</td>
              <td>200</td>
              <td>200</td>
              <td>30</td>
            </tr>
          </tbody>
        {/* </table>
        <table className ='tables'> */}
          <thead>
            <p className='label'>Digs</p>
            <tr>
              <th data-field = 'total'>Total</th>
              <th data-field = 'dig'>Dig</th>
              <th data-field = 'faults'>Faults</th>
              <th data-field = 'digs'>Dig %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500</td>
              <td>395</td>
              <td>105</td>
              <td>.790</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}
export default ViewStats
