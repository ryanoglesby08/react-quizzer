import React from 'react';

import Answer from './answer'

export default class Question extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.question.title}</h2>
        <ul>
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