console.log('hello')
const css = require('../style/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  textInput(e) {
    console.log(this.refs.input, e)
  }

  render() {
    return (
      <div>
        <textarea ref="input" onKeyUp={this.textInput.bind(this)}/>
      </div>
    )
  }
}


// main
ReactDOM.render(<App/>, document.getElementById('app'));
