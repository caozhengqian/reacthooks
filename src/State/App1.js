import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    console.log(props.children(4));
    return items;
}

class Button1 extends Component {
  render() {
    return (


          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

    );
  }
}

export default Button1;
