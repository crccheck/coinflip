console.log('hello')
const css = require('../style/app.scss');

import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      cardinality: 0
    };
  }

  cardinality(str) {
    return _.uniq(str.split('')).length;
  }

  textInput(e) {
    var input = this.refs.input.value.replace(/\s+/g, '');
    var cardinality = this.cardinality(input);
    this.setState({input, cardinality});
  }

  render() {
    return (
      <div>
        <textarea ref="input" onKeyUp={this.textInput.bind(this)}/>
        Unique: <span>{this.state.cardinality}</span>
      </div>
    )
  }
}


// main
ReactDOM.render(<App/>, document.getElementById('app'));
