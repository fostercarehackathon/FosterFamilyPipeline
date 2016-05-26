require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <h2>Foster Care Support</h2>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
