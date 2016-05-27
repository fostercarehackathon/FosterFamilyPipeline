'use strict';

import React from 'react';

require('styles//Onboarder.css');

class OnboarderComponent extends React.Component {
  componentWillMount() {
/**
 *          <script type="text/javascript" src="https://clef.io/v3/clef.js"
                  class="clef-button"
                  data-app-id="b143071ae5f056957f9e447910c28210"
                  data-color="blue"
                  data-style="flat"
                  data-state="magic_cookie"
                  data-redirect-url="https://hackfostercarepipeline-web.herokuapp.com/clef/redirect"
                  data-type="login">
          </script>

 */
  }

  render() {
    return (
      <div className="onboarder-component ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <img src="./assets/logo.png" alt="Logo" />
          <h1 className="ui inverted header">FoCaPipe</h1>
          <h2>See if you can be a foster parent <em>today</em>.</h2>
          <p>
          </p>
        </div>

        <div className="ui text container">
          <p>Before we can begin, we need your ZIP code.</p>
          <div className="ui action input">
            <input type="number" placeholder="Enter your ZIP code" />
            <button className="ui button">
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
