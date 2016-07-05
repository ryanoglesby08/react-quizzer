import React from 'react';

import Answer from './answer'

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: null
    };
    this.chooseGuess = this.chooseGuess.bind(this);
  }

  chooseGuess(guess) {
    if (this.state.guess === null) {
      this.props.chooseAnswer(guess);
    }

    this.setState({guess: guess});
  }

  // React Component lifecycle method
  componentWillReceiveProps(nextProps) {
    if (nextProps.question.title !== this.props.question.title) {
      this.setState({guess: null});
    }
  }

  render() {
    return (
      <section>
        <h2>{this.props.question.title}</h2>
        <ul className="question">
          {
            this.props.question.answers.map((name) =>
              <Answer key={name}
                      text={name}
                      isGuessed={name === this.state.guess}
                      isCorrect={name === this.props.question.correct}
                      chooseGuess={this.chooseGuess}/>
            )
          }
        </ul>
      </section>
    );
  }
}
Question.propTypes = {
  question: React.PropTypes.object.isRequired,
  chooseAnswer: React.PropTypes.func.isRequired
};