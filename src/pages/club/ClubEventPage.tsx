import ActiveButton from '@/components/ActiveButton/ActiveButton';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TabContextProvider } from '@/context/TabContext';
import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

const HeaderElementWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 100%;
`;

const EventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 5rem;
`;

const ClubEventPage = () => {
  const navigate = useNavigate();

  return (
    <TabContextProvider>
      <Header>
        <HeaderElementWrapper>
          <Tab
            tabItems={[
              {
                title: '클럽 홈',
              },
              { title: '클럽 행사' },
              { title: '클럽 관리' },
            ]}
          />
        </HeaderElementWrapper>
      </Header>
      <EventsContainer>
        <EventCard
          eventId="1"
          posterSrc="https://picsum.photos/200/300"
          eventTitle="A BIENTOT A DEMAIN A MAIN"
          eventDate="2023/10/24"
          eventTime="15시40분"
          eventPlace="우리집"
          clubName="강아지는 복슬강아지 나만 보면 반갑다고 멍멍멍"
        />
        <EventCard
          eventId="2"
          posterSrc="https://picsum.photos/200/300"
          eventTitle="연어 전시회"
          eventDate="2023/10/24"
          eventTime="15시40분"
          eventPlace="텍미홈컨트리로드투더플레이스아빌롱"
          clubName="범블비"
        />
        <EventCard
          eventId="3"
          posterSrc="https://picsum.photos/200/300"
          eventTitle="A BIENTOT A DEMAIN A MAIN"
          eventDate="2023/10/24"
          eventTime="15시40분"
          eventPlace="우리집"
          clubName="강아지는 복슬강아지 나만 보면 반갑다고 멍멍멍"
        />
        <EventCard
          eventId="4"
          posterSrc="https://picsum.photos/200/300"
          eventTitle="연어 전시회"
          eventDate="2023/10/24"
          eventTime="15시40분"
          eventPlace="텍미홈컨트리로드투더플레이스아빌롱"
          clubName="범블비"
        />
      </EventsContainer>
      <ButtonWrapper>
        <ActiveButton
          buttonText="행사 생성하기"
          fontSize="mediumTitle"
          onClick={() => navigate('/club/create')}
        />
      </ButtonWrapper>
    </TabContextProvider>
  );
};

export default ClubEventPage;
