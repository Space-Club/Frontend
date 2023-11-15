import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ScheduleContainer = styled.div`
  position: relative;
  width: fit-content;
  min-width: 23rem;
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
  margin-top: 1rem;
`;

const ScheduleContentStyled = styled.div`
  color: ${Theme.color.textGrey};
  font-size: ${Theme.fontSize.mediumContent};
`;

const WriterInfoWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 0.3rem;
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
