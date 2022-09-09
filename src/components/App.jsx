import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import { P, Div, AppContainer } from './App.styled.jsx';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  handleTotal = () => {
    const total = Object.values(this.state).reduce(
      (count, acc) => count + acc,
      0
    );
    return total;
  };

  handlePosFeedbacks = () => {
    const posFeedbacks = Math.floor(
      (this.state.Good / this.handleTotal()) * 100
    );
    return posFeedbacks;
  };

  render() {
    return (
      <AppContainer>
        <Div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

          <Section title="Statistics">
            {this.handleTotal() ? (
              <Statistics
                good={this.state.Good}
                neutral={this.state.Neutral}
                bad={this.state.Bad}
                total={this.handleTotal()}
                posFeedbacks={this.handlePosFeedbacks()}
              />
            ) : (
              <P>No feedback given</P>
            )}
          </Section>
        </Div>
      </AppContainer>
    );
  }
}
