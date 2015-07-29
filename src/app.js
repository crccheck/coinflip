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
      cardinality: 0,
      counts: {}
    };
  }

  counts(arr) {
    return _.countBy(arr, (x) => x)
  }

  cardinality(str) {
    return _.uniq(str.split('')).length;
  }

  textInput(e) {
    const input = this.refs.input.value.replace(/\s+/g, '');
    const cardinality = this.cardinality(input);
    const counts = this.counts(input.split(''));
    this.setState({input, cardinality, counts});
  }

  render() {
    const counts = _.map(
      this.state.counts, (v, k) => <li key={k}>{k}: {v}</li>
    );
    return (
      <div>
        <textarea ref="input" onKeyUp={this.textInput.bind(this)}/>
        Unique: <span>{this.state.cardinality}</span>
        <div>
          Counts:
          <ul>{counts}</ul>
        </div>
      </div>
    )
  }
}


// main
ReactDOM.render(<App/>, document.getElementById('app'));
