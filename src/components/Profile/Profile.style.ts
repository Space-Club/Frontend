import styled from '@emotion/styled';

import Button from '../common/Button/Button';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
  gap: 8rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const EditButton = styled(Button)`
  align-self: flex-end;
`;

export { ProfileContainer, InfoWrapper, EditButton };
