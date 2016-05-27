'use strict';

import React from 'react';
import AnswerComponent from './AnswerComponent';

require('styles//Question.css');

class QuestionComponent extends React.Component {
  render() {
    return (
      <div className="question-component">
        <h2>{{question}}</h2>
        {this.props.answers.map(answer => {
          return (
            <Answer answer={answer} />
          )
        })}
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
// QuestionComponent.propTypes = {};
// QuestionComponent.defaultProps = {};

export default QuestionComponent;
