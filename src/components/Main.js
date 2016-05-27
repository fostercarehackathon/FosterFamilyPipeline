require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <Onboarder />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
