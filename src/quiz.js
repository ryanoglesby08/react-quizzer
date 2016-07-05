/* globals console:false */

import React from 'react';

import Question from './question'
import Scoreboard from './scoreboard'
import History from './history'

class Answer {
  constructor(question) {
    this.title = question.title;
    this.answers = question.answers;
    this.correct = question.correct;

    this.guess = null;
  }

  hasBeenGuessed() {
    return this.guess !== null;
  }

  hasBeenGuessedCorrectly() {
    return this.hasBeenGuessed() && this.guess === this.correct;
  }

  answer(guess) {
    this.guess = guess;
    return this;
  }
}

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);

    const progress = this.props.questions.map((question) => new Answer(question));
    this.progressIterator = progress.values();
    this.current = this.progressIterator.next();

    this.state = {
      progress: progress
    };

    this.chooseAnswer = this.chooseAnswer.bind(this);
    this.next = this.next.bind(this);
  }

  chooseAnswer(guess) {
    console.log(`Chosen answer = ${guess}`);

    this.current.value.answer(guess);
    this.setState({progress: this.state.progress});
  }

  next() {
    this.current = this.progressIterator.next();
    this.setState({progress: this.state.progress});
  }

  render() {
    if (this.current.done) {
      return (
        <div>
          <History history={this.state.progress}/>
          <Scoreboard progress={this.state.progress}/>
        </div>
      );
    }

    return (
      <div>
        <Question question={this.current.value} chooseAnswer={this.chooseAnswer}/>
        <section className="actions">
          <button onClick={this.next}>Next -&gt;</button>
        </section>
        <Scoreboard progress={this.state.progress}/>
      </div>
    );
  }
}
Quiz.propTypes = {
  questions: React.PropTypes.array.isRequired
};