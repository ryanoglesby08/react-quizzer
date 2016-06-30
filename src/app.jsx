import ReactDOM from 'react-dom'
import React from 'react'

const question = require('./question.json');

class Quiz extends React.Component {
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

class Question extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.question.title}</h2>
        <ul>
          {this.props.question.answers.map((name) =>
            <Answer key={name}
                    text={name}
                    isGuessed={name === this.props.guess}
                    isCorrect={name === this.props.question.correct}
                    chooseAnswer={this.props.chooseAnswer}/>
          )}
        </ul>
      </section>
    );
  }
}

class Answer extends React.Component {
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

ReactDOM.render(
  <Quiz question={question} />,
  document.getElementById("app")
);



//{
//  "title": "Who created React?",
//  "answers": [
//    {"name": "Facebook", "correct": true},
//    {"name": "Twitter"},
//    {"name": "Amazon"},
//    {"name": "Netflix"}
//  ]
//}