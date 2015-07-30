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
      counts: {},
      runStats: {},
      runStatsSplit: {}
    };
  }

  textInput(e) {
    const input = this.refs.input.value.replace(/\s+/g, '');
    const counts = _.countBy(input.split(''))
    const choices = _.keys(counts);
    const cardinality = choices.length;

    const runData = _.map(input.match(/(.)\1*/g), (str) => [str[0], str.length]);
    const runStats = _.countBy(runData, (x) => x[1]);

    const runDataSplit = {};
    _.each(runData, (x) => {
      if (!runDataSplit[x[0]]) {
        runDataSplit[x[0]] = [];
      }
      runDataSplit[x[0]].push(x[1]);
    })
    const runStatsSplit = {};
    _.each(runDataSplit, (v, k) => {
      runStatsSplit[k] = _.countBy(v)
    })

    this.setState({input, cardinality, counts, runStats, runStatsSplit});
  }

  render() {
    const counts = _.map(
      this.state.counts, (v, k) => <li key={k}>{k}: {v}</li>
    );
    return (
      <div>
        <form>
          <textarea name="input" ref="input" onKeyUp={this.textInput.bind(this)}/>
        </form>
        Unique: <span>{this.state.cardinality}</span>
        <div>
          Counts:
          <ul>{counts}</ul>
        </div>
        <div>
          Runs:
          <ul>{_.map(this.state.runStats, (v, k) => <li key={k}>{k}: {v}</li>)}</ul>
        </div>
        <div>
          Runs by each choice:
          <ul>
          {
            _.map(this.state.runStatsSplit, (values, k) => {
              return (
                <li key={k}>
                  {k}:
                  <ul>{_.map(values, (count, runLength) => <li key={runLength}>{runLength}: {count}</li>)}
                  </ul>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}


// main
ReactDOM.render(<App/>, document.getElementById('app'));
