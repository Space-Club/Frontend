import ClassificationCard from '@/components/ClassificationCard/ClassificationCard';
import { PATH } from '@/constants/path';
import FormLayout from '@/pages/FormLayout/FormLayout';
import Theme from '@/styles/Theme';

import { useNavigate, useParams } from 'react-router-dom';

import { ChoiceEventContainer } from './ChoiceEventPage.style';

const ChoiceEventPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();

  const CHOICE_CONTENTS = {
    performance: {
      title: '공연',
      content: '인원을 선착순으로 받을 수 있다.',
      exampleText: 'ex) 밴드 동아리 공연, 연극',
      imgSrc: '/src/assets/image/talent-hunt.svg',
      color: `${Theme.color.tBlue}`,
      event: 'show',
    },
    promotion: {
      title: '홍보 이벤트',
      content: '온·오프라인 행사를 홍보할 수 있다.',
      exampleText: 'ex) 플리마켓, 전시회, 일일호프',
      imgSrc: '/src/assets/image/promotion.svg',
      color: `${Theme.color.tPurple}`,
      event: 'promotion',
    },
    recruitment: {
      title: '모집 공고',
      content: '클럽 회원을 모집할 수 있다.',
      exampleText: 'ex) 동아리 모집 공고',
      imgSrc: '/src/assets/image/headhunting.svg',
      color: `${Theme.color.indigo}`,
      event: 'recruitment',
    },
    clubSchedule: {
      title: '클럽 일정',
      content: '클럽 내의 일정을 게시할 수 있다',
      exampleText: ' ex) 연습실 사용 시간, 동아리 집회 시간',
      imgSrc: '/src/assets/image/project-management.svg',
      color: `${Theme.color.tGreen}`,
      event: 'club',
    },
  } as const;

  return (
    <FormLayout>
      <ChoiceEventContainer>
        {Object.values(CHOICE_CONTENTS).map(
          ({ title, content, exampleText, imgSrc, color, event }) => (
            <ClassificationCard
              key={title}
              title={title}
              content={content}
              exampleText={exampleText}
              imgSrc={imgSrc}
              color={color}
              onClick={() => navigate(`${PATH.CLUB.WRITE_INFO(clubId!)}?event=${event}`)}
            />
          ),
        )}
      </ChoiceEventContainer>
    </FormLayout>
  );
};

export default ChoiceEventPage;
