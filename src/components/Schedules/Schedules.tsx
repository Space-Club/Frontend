import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import Schedule from '../Schedule/Schedule';
import {
  HeaderItemStyled,
  LinkMessageStyled,
  NoScheduleMessageStyled,
  NoScheduleWrapper,
  SchedulesContainer,
  SchedulesHeaderWrapper,
  SchedulesWrapper,
} from './Schedules.style';

interface SchedulesProps {
  selectedDate?: string;
}

const Schedules = ({ selectedDate = '23.11.15' }: SchedulesProps) => {
  const navigate = useNavigate();
  const isEmpty = false;

  return (
    <SchedulesContainer>
      <SchedulesHeaderWrapper>
        <HeaderItemStyled>상세정보</HeaderItemStyled>
        <HeaderItemStyled>{selectedDate}</HeaderItemStyled>
      </SchedulesHeaderWrapper>
      {isEmpty ? (
        <NoScheduleWrapper>
          <NoScheduleMessageStyled>해당 날짜에 행사가 없습니다! </NoScheduleMessageStyled>
          <LinkMessageStyled onClick={() => navigate(PATH.CREATE)}>행사 생성하기</LinkMessageStyled>
        </NoScheduleWrapper>
      ) : (
        <SchedulesWrapper>
          <Schedule />
        </SchedulesWrapper>
      )}
    </SchedulesContainer>
  );
};

export default Schedules;
