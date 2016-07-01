/* globals console:false */

import React from 'react';

import Question from './question'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeQuestion: 0
    };
    this.setGuess = this.setGuess.bind(this);
    this.next = this.next.bind(this);
  }

  setGuess(answer) {
    console.log(`Chosen answer = ${answer}`);

    this.setState({guess: answer});
  }

  next() {
    this.setState({activeQuestion: this.state.activeQuestion + 1});
  }

  render() {
    return (
      <div>
        <Question question={this.props.questions[this.state.activeQuestion]} guess={this.state.guess} chooseAnswer={this.setGuess}/>
        <input type="button" value="Next ->" onClick={this.next} />
      </div>
    );
  }
}
Quiz.propTypes = {
  questions: React.PropTypes.array.isRequired
};