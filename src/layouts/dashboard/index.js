import React, { Component,Fragment } from 'react';
//import './style.css'
import TodoItem from './TodoItem';
import Test from './Test';

class Dashboard extends Component {

    constructor(props) {
        super(props);
           // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {    
            inputValue: ' ',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
      console.log('render');
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
              <Test content={this.state.inputValue}/>
              </Fragment>
         )
    }

    getTodoItem() {
       return this.state.list.map((item, index) => {
            return (
              <TodoItem 
              key={index}
              content={item} 
              index={index}
              deleteItem={this.handleItemDelete}
              />
                   )          
                })
              }
  
    handleInputChange(e) {
      const value = e.target.value
      this.setState(() => ({
         inputValue: value
      }));
      console.log('这个是value: ', value);
    }
    handleBtnClick() {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue:''
      }));
  }
    handleItemDelete(index) {
      const list = [...this.state.list];
     list.splice(index, 1);
     this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
     });
    }
}


export default Dashboard;





