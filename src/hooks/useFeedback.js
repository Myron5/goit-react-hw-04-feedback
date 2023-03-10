import { useReducer } from 'react';

export const useFeedbackAactions = Object.freeze({
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
});

export const useFeedback = (
  initialState = {
    [useFeedbackAactions.GOOD]: 0,
    [useFeedbackAactions.NEUTRAL]: 0,
    [useFeedbackAactions.BAD]: 0,
  }
) => {
  const countFeedbackReducer = (state, action) => {
    const { type, payload = 1 } = action;
    const { GOOD, NEUTRAL, BAD } = useFeedbackAactions;

    switch (type) {
      case GOOD:
        return { ...state, [GOOD]: state[GOOD] + payload };
      case NEUTRAL:
        return { ...state, [NEUTRAL]: state[NEUTRAL] + payload };
      case BAD:
        return { ...state, [BAD]: state[BAD] + payload };
      default:
        console.log('Немає такої дії');
        return state;
    }
  };

  const [state, dispatch] = useReducer(countFeedbackReducer, initialState);
  return [state, dispatch];
};
