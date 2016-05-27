'use strict';

import React from 'react';

require('styles//Header.css');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component ui vertical inverted sidebar menu left">
        <a href="#" className="item">Begin</a>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
