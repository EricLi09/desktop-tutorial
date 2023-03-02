import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
         return (
          <Fragment>
              <div><input /><button>提交</button></div>
              <ul>
              <li>学英语</li>
              <li>Learning React</li>
              </ul>
              </Fragment>
         )
    }
}

export default Dashboard;