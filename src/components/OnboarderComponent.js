'use strict';

import React from 'react';
import { Router } from 'react-router';

require('styles//Onboarder.css');

import ClefButton from './ClefButton';

class OnboarderComponent extends React.Component {
/**
          <p className="clef">
            <ClefButton appId='cookie' redirectURL='magic' state='magic' />
          </p>
 */

  startThis() {
    console.log(context);
    Router.push({
      pathname: "/questions/1"
    })
  }

  render() {
    return (
      <div className="onboarder-component ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <img className="logo" src="http://placekitten.com/g/300/300" alt="Logo" />
          <h1 className="ui inverted header">FoCaPipe</h1>
          <h3>See if you can be a foster parent <em>today</em>.</h3>
        </div>

        <div className="ui text container">
          <p>Before we can begin, we need your ZIP code.</p>
          <div className="ui action input">
            <input type="text" placeholder="Enter your ZIP code" />
            <button className="ui teal button" onClick={this.startThis}>
              <i className="icon map" />
              Begin
            </button>
          </div>
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
