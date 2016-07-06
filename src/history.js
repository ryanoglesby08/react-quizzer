import React from 'react'

const styles = {
  correct: {
    backgroundColor: 'lightGreen',
    border: '1px dashed green',
    color: 'green'
  },
  incorrect: {
    backgroundColor: 'pink',
    border: '1px dashed red',
    color: 'red'
  }
};

class HistoryLine extends React.Component {
  render() {
    const answer = this.props.answer;

    const correctAnswerText = <p>Answer: {answer.guess}</p>
    const wrongAnswerText =
      <div>
        <p>Your Answer: {answer.guess}</p>
        <p>Correct Answer: {answer.correct}</p>
      </div>;

    return (
      <li style={answer.hasBeenGuessedCorrectly() ? styles.correct : styles.incorrect}>
        <h2>
          <span className="badge">{answer.hasBeenGuessedCorrectly() ? 'right!' : 'wrong'}</span>
          {answer.title}
        </h2>
        {answer.hasBeenGuessedCorrectly() ? correctAnswerText : wrongAnswerText}
      </li>
    );
  }
}
HistoryLine.propTypes = {
  answer: React.PropTypes.object.isRequired
};

export default class History extends React.Component {
  render() {
    return (
      <section className="history">
        <ul>
          {this.props.history.map((answer) => <HistoryLine key={answer.title} answer={answer}/>)}
        </ul>
      </section>
    );
  }
}
History.propTypes = {
  history: React.PropTypes.array.isRequired
};