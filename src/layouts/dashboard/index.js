import React, { Component,Fragment } from 'react';
//import './style.css'
import TodoItem from './TodoItem';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ' ',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
         return (
          <Fragment>
            <div>
              <label htmlfor="insertArea">输入内容</label>
              <input
              id="insertaArea"
              className='input'
              value={this.state.inputValue}
              onChange={this.handleInputChange}
               />
               <button onClick={this.handleBtnClick}>提交</button>            
              </div>            
              <ul>
                {this.getTodoItem()}
              </ul>
              </Fragment>
         )
    }

    gerTodoItem() {
       return this.state.list.map((item, index) => {
          ((item,index) => {
            return (
              <TodoItem 
              key={index}
              content={item} 
              index={index}
              deleteItem={this.handleItemDelete}
              />
          
            )         
          })
        })
    }
  
    handleInputChange(e) {
      const value = e.target.value
      this.setState(() => {
         inputValue: value
      });
    }
    handleBtnClick() {
      this.setState((prevState) => {
        list: {...prevState.list, prevState.inputValue},
        inputValue:''
      });
  }
    handleItemDelete(index) {
     list.splice(index, 1);
     this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
     });
    }
}


export default Dashboard;





