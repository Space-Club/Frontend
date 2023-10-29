import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';
import styled from '@emotion/styled';

const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
`;

const BannerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
`;

const EventCardWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%;
  border: 1px solid;
`;

const MainPage = () => {
  return (
    <TabContextProvider>
      <Header style={{ justifyContent: 'space-between' }}>
        <SearchInputForm />
        <Tab
          defaultTab={`${TAB_CONSTANTS.PERFORMANCE}`}
          tabItems={[
            {
              title: `${TAB_CONSTANTS.PERFORMANCE}`,
            },
            {
              title: `${TAB_CONSTANTS.EVENT_SHOW}`,
            },
            {
              title: `${TAB_CONSTANTS.RECRUITMENT}`,
            },
          ]}
        />
      </Header>
      <ContentContainerStyled>
        <BannerWrapperStyled>
          <Banner width={35} height={20} />
        </BannerWrapperStyled>
        <EventCardWrapperStyled>
          <EventCard
            eventId={1}
            eventPoster="https://picsum.photos/153/213"
            eventTitle="연어 전시회"
            eventDate="2023/10/29, 15시 30분"
            eventPlace="하천대강당"
            clubName="불곰"
          />
          <EventCard
            eventId={2}
            eventPoster="https://picsum.photos/153/213"
            eventTitle="연어 전시회"
            eventDate="2023/10/29, 15시 30분ㅇㄻㄴㄻㄴㅇㄻㄴㄹㄹ"
            eventPlace="하천대강당"
            clubName="불곰"
          />
          <EventCard
            eventId={3}
            eventPoster="https://picsum.photos/153/213"
            eventTitle="연어 전시회"
            eventDate="2023/10/29, 15시 30분ㅇㄻㄴㄻㄴㅇㄻㄴㄹㄹ"
            eventPlace="하천대강당"
            clubName="불곰"
          />
          <EventCard
            eventId={4}
            eventPoster="https://picsum.photos/153/213"
            eventTitle="연어 전시회"
            eventDate="2023/10/29, 15시 30분ㅇㄻㄴㄻㄴㅇㄻㄴㄹㄹ"
            eventPlace="하천대강당"
            clubName="불곰"
          />
        </EventCardWrapperStyled>
      </ContentContainerStyled>
    </TabContextProvider>
  );
};

export default MainPage;
