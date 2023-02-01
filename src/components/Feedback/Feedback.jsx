import { useState } from 'react';
import { FeedbackWrapper } from './Feedback.styled';
import Button from './Button';
import Statistics from './Statistics';
import Notification from './Notification'
import Section from 'components/Section';

const Feedback = () => {

    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const countPositiveFeedbackPercentage = (good, totalFeedbacks) => {
        return totalFeedbacks !== 0 ? Math.round((good * 100) / totalFeedbacks) : 0;
    };

    const totalFeedbacks = good + neutral + bad;
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage(good, totalFeedbacks);
       
    return (
        <FeedbackWrapper>
            <Section title="Please leave feedback">
                <Button onClickHendler={() => setGood( prevGood => prevGood + 1 )} option="Good"/>
                <Button onClickHendler={() => setNeutral( prevNeutral => prevNeutral + 1 )} option="Neutral"/>
                <Button onClickHendler={() => setBad( prevBad => prevBad + 1 )} option="Bad"/>
            </Section>
            
            {totalFeedbacks !== 0 ? 
                (<Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={totalFeedbacks} 
                    positivePercentage={positiveFeedbackPercentage}
                />) : (
                <Notification 
                    message="No feedbacks!"
                />)
            }
        </FeedbackWrapper>
    )
};

export default Feedback;