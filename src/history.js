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

export default class History extends React.Component {
  render() {
    const stylesFor = (answer) => answer.hasBeenGuessedCorrectly() ? styles.correct : styles.incorrect;

    return (
      <section className="history">
        <ul>
          {
            this.props.history.map((answer) =>
              <li key={answer.title} style={stylesFor(answer)}>
                <h2>
                  <span className="badge">{answer.hasBeenGuessedCorrectly() ? 'right!' : 'wrong'}</span>
                  {answer.title}
                </h2>
                {(() => {
                  if (answer.hasBeenGuessedCorrectly()) {
                    return <p>Answer: {answer.guess}</p>;
                  }
                  else {
                    return (
                      <div>
                        <p>Your Answer: {answer.guess}</p>
                        <p>Correct Answer: {answer.correct}</p>
                      </div>
                    );
                  }
                })()}
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}
History.propTypes = {
  history: React.PropTypes.array.isRequired
};