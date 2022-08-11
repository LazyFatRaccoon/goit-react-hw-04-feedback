import { Component } from "react";
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Section from './Section'



export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0
  }

  onLeaveFeedback = (name) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
      }
    })
  }


  render() {
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '1px 2px 9px #F4AAB9',
      }}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>

      <Section title='Statistics'>
        <Statistics data={this.state} />
      </Section>
      </div>
    </div>
}
    
}
