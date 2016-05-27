'use strict';

import React from 'react';

require('styles//Success.css');

class SuccessComponent extends React.Component {
  render() {
    return (
<div className="interstitial" style="
    text-align: center;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    z-index: 1000;
    background-image: url('images/confetti.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;"><div className="title" style="text-align: center;">
  <span style="
    font-weight: bolder;
    margin: 0;
    color: rgba(0,0,0,1);
    font-size: 5em;
    line-height: .5em;
    padding-top: 1em;
    display: block;">Success!</span>
    <div style="
    font-size: 2em;
    color: #666;
    padding: 1.5em;
    line-height: 1.3em;
    ">We Recommend You Become A <span style="
    font-weight: bolder;
    color: #0f9970;
">Foster Parent!</span> </div>
  <div style="
    font-size: 2em;
    line-height: 2em;
    font-weight: bold;
">Here's what's next</div>
  <ul style="
    display: inline-block;
    padding: .5em;
    text-align: left;
    margin: 0 auto;
    font-size: 1.2em;
"><li>Lorem ipsum dolor sit amet</li>
  <li>consectetur adipiscing elit</li>
  <li>sed do eiusmod tempor incididunt</li>
  <li>ut labore et dolore magna aliqua</li></ul>
</div>
  <div className="cta" style="position: absolute;left: 0;right: 0;bottom: 0;"><div style="padding: 1em;font-size: 1.5em;">Know any other potential
  <span style="
    font-weight: bold;
">foster greats<span>?</span></span></div><a href="#" className="" style="
    line-height: 3em;
    text-align: center;
    font-size: 1.5em;
    color: white;
    background-color: #3f71d8;
    display:block;
    text-transform: uppercase;
    "><span style="
    font-weight: bold;
">Invite</span> 3 Friends</a>
  </div>

      </div>    );
  }
}

SuccessComponent.displayName = 'SuccessComponent';

// Uncomment properties you need
// SuccessComponent.propTypes = {};
// SuccessComponent.defaultProps = {};

export default SuccessComponent;
