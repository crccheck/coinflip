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
      runStats: {}
    };
  }

  textInput(e) {
    const input = this.refs.input.value.replace(/\s+/g, '');
    const counts = _.countBy(input.split(''), (x) => x)
    const cardinality = _.keys(counts).length;

    const runData = _.map(input.match(/(.)\1*/g), (str) => [str[0], str.length]);
    const runStats = _.countBy(runData, (x) => x[1]);

    this.setState({input, cardinality, counts, runData, runStats});
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
        <div>
          Runs:
          <ul>{_.map(this.state.runStats, (v, k) => <li key={k}>{k}: {v}</li>)}</ul>
        </div>
      </div>
    )
  }
}


// main
ReactDOM.render(<App/>, document.getElementById('app'));
