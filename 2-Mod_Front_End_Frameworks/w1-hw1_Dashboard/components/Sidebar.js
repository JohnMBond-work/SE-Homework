import React, {Component} from 'react'

export default class Sidebar extends React.Component {
  render() {
      return (
        <div className='sidebar'>
        <ul>
          <li class="sidebar">{this.props.name} Hardcoded Dashboard</li>
          <li class="sidebar">Widget</li>
          <li class="sidebar">Reviews</li>
          <li class="sidebar">Customers</li>
          <li class="sidebar">Online Analysis</li>
          <li class="sidebar">Settings</li>
        </ul>
        {/* <ul>
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul> */}
      </div>
  )
      )
  }
}
