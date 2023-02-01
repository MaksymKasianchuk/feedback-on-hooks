import styled from '@emotion/styled';

export const FeedbackWrapper = styled.section`
    margin: 0 auto;
`;

export const ButtonStyled = styled.button`
    display: inline-block;
    margin-right: 20px;
`;

export const StatisticsList = styled.div`
    padding: 0;
    margin: 0;
    list-style: none;
    &>li{
        display: block;
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
`;

export const NotificationStyled = styled.div`
    padding: 20px;
    margin: 0;
    background: ${props => props.theme.colors.dangerBg};
    border-radius: ${props => props.theme.radii.cardBorderRadius}px;
    &>p{
        text-align: center;
        color: ${props => props.theme.colors.dangerColor};
    }
`;
