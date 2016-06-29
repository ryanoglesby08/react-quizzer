import ReactDOM from 'react-dom'
import React from 'react'

const question = require('./question.json');

class Answer extends React.Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

class Question extends React.Component {
  render() {
    return <div>
              <h2>{this.props.question.title}</h2>
              <ul>

                {this.props.question.answers.map((answer) => <Answer key={Math.random()} text={answer} />)}
              </ul>
          </div>
  }
}

ReactDOM.render(
  <Question question={question} />,
  document.getElementById("app")
);