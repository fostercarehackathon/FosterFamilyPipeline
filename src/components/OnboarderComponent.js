'use strict';

import React from 'react';
import { Link, Router, browserHistory } from 'react-router';

require('styles//Onboarder.css');

import ClefButton from './ClefButton';
import Question from '../containers/Question';

class OnboarderComponent extends React.Component {
/**
          <p className="clef">
            <ClefButton appId='cookie' redirectURL='magic' state='magic' />
          </p>
 */

  startThis() {
    React.renderComponent(Question, document.getElementById("app"));
  }

  render() {
    return (
      <div className="onboarder-component ui vertical masthead aligned segment">
        <div className="ui text container segment center">
          <h1 className>What's your name?</h1>
        </div>

        <div className="ui text container" style={{marginTop: "20px"}}>
          <div className="ui form">
            <div className="grouped fields">
              <div className="field">
                <div className="ui action input">
                  <input type="text" placeholder="Jane Doe III" />
                  <button className="ui blue button">
                      <i className="icon check" />
                      Next
                  </button>
                </div>
              </div>
            </div>
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
