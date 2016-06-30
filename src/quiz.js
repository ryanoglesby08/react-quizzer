import React from 'react';

import Question from './question'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.setGuess = this.setGuess.bind(this);
  }

  setGuess(answer) {
    console.log(`Chosen answer = ${answer}`);

    this.setState({guess: answer});
  }

  render() {
    return (
      <div>
        <Question question={this.props.question} guess={this.state.guess} chooseAnswer={this.setGuess}/>
      </div>
    );
  }
}