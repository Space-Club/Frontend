import ClassificationCard from '@/components/ClassificationCard/ClassificationCard';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  height: 100%;
  padding: 3rem 0;
  box-sizing: border-box;
`;

const ChoiceEventPage = () => {
  const navigate = useNavigate();

  const content = [
    [
      '공연',
      '인원을 선착순으로 받을 수 있다.',
      'ex) 밴드 동아리 공연, 연극',
      '/src/assets/image/talent-hunt.svg',
      `${Theme.color.tBlue}`,
      'performance',
    ],
    [
      '홍보 이벤트',
      '온·오프라인 행사를 홍보할 수 있다.',
      'ex) 플리마켓, 전시회, 일일호프',
      '/src/assets/image/promotion.svg',
      `${Theme.color.tPurple}`,
      'promotion',
    ],
    [
      '모집 공고',
      '클럽 회원을 모집할 수 있다.',
      'ex) 동아리 모집 공고',
      '/src/assets/image/headhunting.svg',
      `${Theme.color.indigo}`,
      'recruit',
    ],
    [
      '클럽 일정',
      '클럽 내의 일정을 게시할 수 있다',
      ' ex) 연습실 사용 시간, 동아리 집회 시간',
      '/src/assets/image/project-management.svg',
      `${Theme.color.tGreen}`,
      'schedule',
    ],
  ];
  return (
    <Container>
      {content.map((item, index) => (
        <ClassificationCard
          key={index}
          title={item[0]}
          content={item[1]}
          exampleText={item[2]}
          imgSrc={item[3]}
          color={item[4]}
          onClick={() => navigate(`/event/writeinfo?event=${item[5]}`)}
        />
      ))}
    </Container>
  );
};

export default ChoiceEventPage;
