'use strict';

import React from 'react';

require('styles//Onboarder.css');

class OnboarderComponent extends React.Component {
  render() {
    return (
      <div className="onboarder-component ui inverted vertical masthead center aligned segment">
        <div className="ui container">
          <div className="ui large secondary inverted pointing menu">
            <a className="toc item">
              <i className="sidebar icon"></i>
            </a>
            <a className="active item">Home</a>
            <div className="right item">
              <a className="ui inverted button">Log in</a>
              <a className="ui inverted button">Sign Up</a>
            </div>
          </div>
        </div>

        <div className="ui text container">
          <h1 className="ui inverted header">
            Imagine-a-Company
          </h1>
          <h2>Do whatever you want when you want to.</h2>
          <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
        </div>
      </div>
    );
  }
}

OnboarderComponent.displayName = 'OnboarderComponent';

// Uncomment properties you need
// OnboarderComponent.propTypes = {};
// OnboarderComponent.defaultProps = {};

export default OnboarderComponent;
