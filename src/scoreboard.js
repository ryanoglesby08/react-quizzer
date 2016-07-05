import React from 'react';

export default class Scoreboard extends React.Component {
  render() {
    const numCorrect = this.props.progress
      .filter((answer) => answer.hasBeenGuessedCorrectly())
      .length;

    return (
      <section className="scoreboard">
        {numCorrect} correct out of {this.props.progress.length} questions
      </section>
    );
  }
}
Scoreboard.propTypes = {
  progress: React.PropTypes.array.isRequired
};