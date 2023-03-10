import { useFeedback, useFeedbackAactions } from '../hooks';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { AppBox } from './GeneralContainers';

export const App = () => {
  const [feedBacks, feedbacksDispatch] = useFeedback();
  const { GOOD, NEUTRAL, BAD } = useFeedbackAactions;

  const countTotalFeedback = () => {
    const totalArr = Object.values(feedBacks);
    const total = totalArr.reduce((acum, prev) => acum + prev);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = feedBacks[GOOD];
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = (positiveFeedback / totalFeedback) * 100;
    return Number(positiveFeedbackPercentage.toFixed(2));
  };

  return (
    <AppBox>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={() => {
            feedbacksDispatch({ type: GOOD });
          }}
          onNeutral={() => {
            feedbacksDispatch({ type: NEUTRAL });
          }}
          onBad={() => {
            feedbacksDispatch({ type: BAD });
          }}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedBacks[GOOD]}
          neutral={feedBacks[NEUTRAL]}
          bad={feedBacks[BAD]}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          message="There is no feedback  given"
        />
      </Section>
    </AppBox>
  );
};
