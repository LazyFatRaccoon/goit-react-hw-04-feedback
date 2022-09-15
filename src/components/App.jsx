import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import { P, Div, AppContainer } from './App.styled.jsx';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };

  const handleTotal = () => {
    const total = good + neutral + bad;
    return total;
  };

  const handlePosFeedbacks = () => {
    const posFeedbacks = Math.floor((good / handleTotal()) * 100);
    return posFeedbacks;
  };

  return (
    <AppContainer>
      <Div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {handleTotal() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={handleTotal()}
              posFeedbacks={handlePosFeedbacks()}
            />
          ) : (
            <P>No feedback given</P>
          )}
        </Section>
      </Div>
    </AppContainer>
  );
};

