import styled from '@emotion/styled';

const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const PaginationWrapper = styled.div`
  padding: 2rem 0 5rem 0;
`;

export { ContentContainerStyled, BannerWrapperStyled, EventCardWrapperStyled, PaginationWrapper };
