import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Banner from '@/components/common/Banner/Banner';
import EventCard from '@/components/common/EventCard/EventCard';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { TAB_CONSTANTS } from '@/constants/tab';
import { TabContextProvider } from '@/context/TabContext';
import { truncateText } from '@/utils/truncateText';

import {
  BannerWrapperStyled,
  ContentContainerStyled,
  EventCardWrapperStyled,
} from './MainPage.style';

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
            eventTitle={truncateText('연어 전시회1', 13)}
            eventDate="2023/10/29"
            eventTime="15시 30분"
            eventPlace={truncateText('코엑스', 10)}
            clubName={truncateText('불곰', 12)}
          />
          <EventCard
            eventId={2}
            eventPoster="https://picsum.photos/153/213"
            eventTitle={truncateText('가나다라마바사아자차카타파하', 13)}
            eventDate="2023/10/30"
            eventTime="15시"
            eventPlace={truncateText('어디긴 네 마음이지 라는 본심을 숨기며', 10)}
            clubImageSrc="https://picsum.photos/200"
            clubName={truncateText('어제는 공연을 봤는데 오랜만에', 12)}
          />
          <EventCard
            eventId={3}
            eventPoster="https://picsum.photos/153/213"
            eventTitle={truncateText('추억의 8090: 그날의 우리', 13)}
            eventDate="2023/10/31"
            eventTime="16시"
            eventPlace={truncateText('우리집', 10)}
            clubImageSrc="https://picsum.photos/200"
            clubName={truncateText('pinkfloyd', 12)}
          />
          <EventCard
            eventId={4}
            eventPoster="https://picsum.photos/153/213"
            eventTitle={truncateText('BornToBe', 13)}
            eventDate="2023/10/32"
            eventTime="32시 68분"
            eventPlace={truncateText('화성', 10)}
            clubName={truncateText('외존믿모', 12)}
          />
        </EventCardWrapperStyled>
      </ContentContainerStyled>
    </TabContextProvider>
  );
};

export default MainPage;
