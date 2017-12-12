import React from 'react';
import Button from '../src/index';
import Icon from 'cefc-ui-icon';

class App extends React.Component {

  render() {
    return (
       <div id="btn-demo">
         <div>Button Demo</div>

         <div className="btn-single">
           <Button radius >Radius</Button>
           <Button disabled >Disabled</Button>
           <Button radius width="100">Width 100</Button>
           <Button radius >
             <Icon type="icon-delete" />
             <span>Plus</span>
           </Button>
         </div>
         <div className="btn-single">
           <Button block radius >Block Button</Button>
         </div>

         <Button.Group justify>
           <Button>Left</Button>
           <Button>Middle</Button>
           <Button>Right</Button>
         </Button.Group>

         <Button.Group vertical>
           <Button>Left</Button>
           <Button>Middle</Button>
           <Button>Right</Button>
         </Button.Group>

         <div style={{positive: 'relative'}}>
           <Button radius fixed="bottom" block>Fixed Button</Button>
         </div>
       </div>

    );
  }
}

export default App;
