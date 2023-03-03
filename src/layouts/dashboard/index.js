import React, { Component,Fragment } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello!!!!',
            list: []
        }
    }

    render() {
         return (
          <Fragment>
            <div>
              <input
              value={this.state.inputValue}
              onChange={this.handleInputChang.bind(this)}
               />
               <button>提交</button>            
              </div>            
              <ul>
              <li>学英语</li>
              <li>Learning React</li>
              </ul>
              </Fragment>
         )
    }

    handleInputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
    }
}

export default Dashboard;





