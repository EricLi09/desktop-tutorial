import React, { Component,Fragment } from 'react';
// import './style.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ' ',
            list: []
        }
    }

    render() {
         return (
          <Fragment>
            <div>
              <label>输入内容</label>
              <input
              className='input'
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
               />
               <button onClick={this.handleBtnClick.bind(this)}>提交</button>            
              </div>            
              <ul>
                {
                  this.state.list.map
                  ((item,index) => {
                    return (
                    <li
                    key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                    >
                      {item}
                    </li>
                    )         
                  })
                }
              </ul>
              </Fragment>
         )
    }

    handleInputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
    }
    handleItemDelete(index) {
     const list = [...this.state.list];
     list.splice(index,1)
     this.setState({
      list: list
     })

     console.log(index);
    }
    handleBtnClick() {
        this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue:''
        })
    }
}


export default Dashboard;





