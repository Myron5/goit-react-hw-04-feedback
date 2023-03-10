import React from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { AppBox } from './GeneralContainers';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = e => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutral = e => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBad = e => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalArr = Object.values(this.state);
    const total = totalArr.reduce((acum, prev) => acum + prev);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = (positiveFeedback / totalFeedback) * 100;
    return Number(positiveFeedbackPercentage.toFixed(2));
  };

  render = () => (
    <AppBox>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={this.onGood}
          onNeutral={this.onNeutral}
          onBad={this.onBad}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          message="There is no feedback  given"
        />
      </Section>
    </AppBox>
  );
}
