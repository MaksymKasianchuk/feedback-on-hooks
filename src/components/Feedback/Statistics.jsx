import PropTypes from 'prop-types';
import { StatisticsList } from './Feedback.styled';
import Section from 'components/Section';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <Section title="Statistics">
            <StatisticsList>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                {total !== 0 && (<li>Total: <span>{total}</span></li>)}
                {positivePercentage !== 0 && (<li>Positive: <span>{positivePercentage}%</span></li>)}
            </StatisticsList>
        </Section>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;