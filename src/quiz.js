/* globals console:false */

import React from 'react';

import Question from './question'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: null,
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
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      guess: null
    });
  }

  render() {
    const isOnLastQuestion = () => this.state.activeQuestion === this.props.questions.length - 1;
    const hasGuessed = () => this.state.guess !== null;
    const nextButtonStyle = {
      display: isOnLastQuestion() || !hasGuessed() ? "none" : ""
    };

    return (
      <div>
        <Question question={this.props.questions[this.state.activeQuestion]} guess={this.state.guess} chooseAnswer={this.setGuess}/>
        <input type="button" value="Next ->" style={nextButtonStyle} onClick={this.next} />
      </div>
    );
  }
}
Quiz.propTypes = {
  questions: React.PropTypes.array.isRequired
};