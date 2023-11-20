import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ScheduleContainer = styled.div`
  position: relative;
  min-width: 25rem;
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${Theme.color.white};
`;

const ScheduleTitleStyled = styled.div`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.largeContent};
`;

const ScheduleContentWrapper = styled.div`
  margin-top: 0.5rem;
`;

const ScheduleContentStyled = styled.span`
  color: ${Theme.color.textGrey};
  font-size: ${Theme.fontSize.mediumContent};
  cursor: pointer;
`;

const WriterInfoWrapper = styled.div`
  display: flex;
  align-items: start;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
`;

const WriterNameStyled = styled.div`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.smallContent};
`;

export {
  ScheduleContainer,
  ScheduleTitleStyled,
  ScheduleContentWrapper,
  ScheduleContentStyled,
  WriterInfoWrapper,
  WriterNameStyled,
};
