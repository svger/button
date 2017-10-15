import React from 'react';
import Button from '../src/index';

class App extends React.Component {

  render() {
    return (
       <div>
         <div>Button Demo</div>

         <Button color="blue" block radius >Button</Button>
       </div>

    );
  }
}

export default App;
