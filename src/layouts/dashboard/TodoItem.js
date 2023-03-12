import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

   constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
   }

   render() {
    const { content,test } = this.props;
     // JSX -> createElemnt -> 虚拟DOM (JS 对象) -> 真实的DOM
     //return <div><span>item</span></div>
     return React.createElement('div', {}, React.createElement('span', {}, 'item'));
    }

    handleClick() {
        const { deleteItem, index } = this.props;
       deleteItem(index);
    }
}

TodoItem.porpTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}
export default TodoItem;