import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionComponent from '../components/QuestionComponent';

class Question extends Component {
  render() {
    console.log('goooo');
    const {actions} = this.props;
    return <QuestionComponent actions={actions} question={null}/>;
  }
}

Question.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
