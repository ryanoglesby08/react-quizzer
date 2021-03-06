import React from 'react';

const guessedStyle = {
  correct: {
    backgroundColor: 'lightGreen',
    border: '1px solid green',
    color: 'green'
  },
  incorrect: {
    backgroundColor: 'pink',
    border: '1px solid red',
    color: 'red'
  }
};

export default class Answer extends React.Component {
  render() {
    const handleClick = () => this.props.chooseGuess(this.props.text);

    const style = (isGuessed, isCorrect) => {
      if (!isGuessed) {
        return {};
      }

      return isCorrect ? guessedStyle.correct : guessedStyle.incorrect;
    };

    return (
      <li className="answer" style={style(this.props.isGuessed, this.props.isCorrect)} onClick={handleClick}>{this.props.text}</li>
    );
  }
}
Answer.propTypes = {
  text: React.PropTypes.string.isRequired,
  isGuessed: React.PropTypes.bool.isRequired,
  isCorrect: React.PropTypes.bool.isRequired,
  chooseGuess: React.PropTypes.func.isRequired
};