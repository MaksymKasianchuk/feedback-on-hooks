import PropTypes from 'prop-types';
import { ButtonStyled } from './Feedback.styled';

const Button = ({onClickHendler, option}) => {
    return(
        <ButtonStyled type='button' onClick={onClickHendler}>{option}</ButtonStyled>
    )
};

Button.propTypes = {
    onClickHendler: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired,
};

export default Button;