'use strict';

import React from 'react';
require('styles//Question.css');

function renderAnswer(answer, onClick) {
  return <strong onClick={onClick}>{answer}</strong>
}

const QuestionDb = [
  {
    'caption': "What's your name?",
    'type': 'text'
  },
  {
    'caption': "What's your full address?",
    'type': 'address',
  },
  {
    'caption': 'Martial Status',
    'type': 'option',
    'choices': [
      'Single',
      'Divorced',
      'Widowed',
      'Live-in',
      'Domestic Parternship',
      'Married',
    ]
  },
  {
    'caption': 'Sexual Orientation',
    'type': 'option',
    'choices': [
      'Gay / Lesbian / Homosexual',
      'Heterosexual',
      'Pansexual',
      'Asexual'
    ]
  },
  {
    'caption': 'Education',
    'type': 'option',
    'choices': [
      'GED',
      'High School Degree',
      'Bachelor of the Arts (BA)',
      'Master of the Arts (MA)',
      'Doctorate / JD'
    ]
  },
  {
    'caption': 'Total Home Income Range',
    'type': 'option',
    'choices': [
      'Under $25,000',
      '$25,000 - $45,000',
      '$45,000 - $65,000',
      '$65,000 - $85,000',
      '$85,000 - $100,000',
      '$100,000 - $150,000',
      '$150,000 - $175,000',
      '$175,000 - $200,000',
      'Over $200,000',
    ]
  }
];

function getQuestion(index) {
  return QuestionDb[index];
}



class QuestionComponent extends React.Component {
  renderAnswers() {
    switch (this.props.question.type) {
      default: return <strong>welp</strong>
    }
  }

  render() {
    let question = getQuestion(0);
    console.log(question)
    return (
      <div className="question-component ui inverted vertical masthead center aligned segment">
        <h2>{question.caption}</h2>
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
QuestionComponent.propTypes = {};
QuestionComponent.defaultProps = {};

export default QuestionComponent;
