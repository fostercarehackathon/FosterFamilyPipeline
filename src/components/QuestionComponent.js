'use strict';

import React from 'react';

require('styles//Question.css');

// FIXME: Import questions.

class QuestionComponent extends React.Component {
  render() {
    return (
      <div className="question-component">
        <h2>{{body}}</h2>
        <!-- FIXME: Add question inner layer -->
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
// QuestionComponent.propTypes = {};
// QuestionComponent.defaultProps = {};

export default QuestionComponent;
