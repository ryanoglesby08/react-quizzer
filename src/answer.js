import React from 'react';

export default class Answer extends React.Component {
  render() {
    const handleClick = () => this.props.chooseAnswer(this.props.text);

    const displayGuess = (isGuessed, isCorrect) => {
      if (!isGuessed) {
        return "";
      }

      return isCorrect ? " Correct!" : " Wrong!"
    };

    return (
      <li onClick={handleClick}>
        {this.props.text}
        <span>
          {displayGuess(this.props.isGuessed, this.props.isCorrect)}
        </span>
      </li>
    );
  }
}