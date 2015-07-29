console.log('hello')
const css = require('../style/app.scss');

import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <textarea/>
      </div>
    )
  }
}


// main
React.render(<App/>, document.getElementById('app'));
