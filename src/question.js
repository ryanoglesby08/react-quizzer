import React from 'react';

import Answer from './answer'

export default class Question extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.question.title}</h2>
        <ul className="question">
          {
            this.props.question.answers.map((name) =>
              <Answer key={name}
                      text={name}
                      isGuessed={name === this.props.guess}
                      isCorrect={name === this.props.question.correct}
                      chooseAnswer={this.props.chooseAnswer}/>
            )
          }
        </ul>
      </section>
    );
  }
}
Question.propTypes = {
  question: React.PropTypes.object.isRequired,
  guess: React.PropTypes.string,
  chooseAnswer: React.PropTypes.func.isRequired
};