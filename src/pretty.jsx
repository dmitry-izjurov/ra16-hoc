import React from 'react';
import Popular from './popular';
import New from './new';

function GetPretty(Component) {
  return class extends React.Component {
    render() {
      if (this.props.views > 1000) {
        return <Popular><Component {...this.props} /></Popular>;
      } else {
        return <New><Component {...this.props} /></New>;
      }
      
    }
  }
}

export default GetPretty;