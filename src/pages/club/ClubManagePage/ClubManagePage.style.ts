import Button from '@/components/common/Button/Button';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ClubManagePageContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin: 2.3rem 0;
  gap: 4rem;
  flex-wrap: wrap;
`;

const ClubManagePageLeftWrapper = styled.section`
  max-height: 110vh;
  flex-grow: 3;
`;

const ClubManagePageRightWrapper = styled.section`
  max-height: 110vh;
  flex-grow: 4;
`;

const DeleteButton = styled(Button)`
  margin-top: 2rem;
  color: ${Theme.color.tSeparator};
  background-color: ${Theme.color.tWhiteGrey};

  &:hover {
    background-color: ${Theme.color.tSeparator};
    color: ${Theme.color.tWhiteGrey};
  }
`;

export {
  ClubManagePageLeftWrapper,
  ClubManagePageRightWrapper,
  ClubManagePageContainer,
  DeleteButton,
};
