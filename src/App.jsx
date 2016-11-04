import React, { Component } from 'react';
import { observer } from 'mobx-react';
import  Button  from './button/button'
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
          <h2>{this.props.appState.timer}</h2>
          <Button label="Reset Timer" handleClick={this.onReset} >
          </Button>
          <br/> <br/>
          <Button label="Add 100" handleClick={this.onAdd100} >
          </Button>

        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }

  onAdd100 = () => {
      this.props.appState.add100();
  }

}

export default App;
