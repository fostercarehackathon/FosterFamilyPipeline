require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import OnboarderComponent from './OnboarderComponent';
import HeaderComponent from './HeaderComponent';

class Main extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="pusher">
          <OnboarderComponent />
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
};

export default Main;
