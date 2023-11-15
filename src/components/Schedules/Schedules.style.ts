import Theme from '@/styles/Theme';
import { sideBarScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const SchedulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 27rem;
  width: fit-content;
  height: 31rem;
  border-radius: 1.3rem;
  background-color: ${Theme.color.tWhiteGrey};
`;

const SchedulesHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;

const HeaderItemStyled = styled.div`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.smallTitle};
`;

const SchedulesWrapper = styled(sideBarScrollAreaStyled)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  max-height: 25rem;
  height: 100%;
`;

const NoScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  height: 100%;
  padding-top: 2rem;
`;

const NoScheduleMessageStyled = styled.div`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.mediumContent};
`;

const LinkMessageStyled = styled.span`
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.smallContent};
  cursor: pointer;
`;

export {
  SchedulesContainer,
  SchedulesHeaderWrapper,
  HeaderItemStyled,
  SchedulesWrapper,
  NoScheduleWrapper,
  NoScheduleMessageStyled,
  LinkMessageStyled,
};
