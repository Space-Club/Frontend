<<<<<<< HEAD
import styled from '@emotion/styled';

import Button from '../common/Button/Button';

=======
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

>>>>>>> 9394bae (feat: profilePage ui 구현)
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
<<<<<<< HEAD
const EditButton = styled(Button)`
  align-self: flex-end;
=======
const EditButton = styled.button`
  width: 6rem;
  height: 2rem;
  align-self: flex-end;
  outline: none;
  background-color: ${Theme.color.tButton};
  color: white;
  border: 1px solid ${Theme.color.tButton};
  border-radius: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
>>>>>>> 9394bae (feat: profilePage ui 구현)
`;

export { ProfileContainer, InfoWrapper, EditButton };
