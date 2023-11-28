import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { SemiPurpleButton } from '../SemiPurpleButton/SemiPurpleButton.style';

const WithdrawClubButtonStyled = styled(SemiPurpleButton)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${Theme.color.white};
  background-color: rgba(204, 204, 204, 0.7);
  border: 0;
  font-size: ${Theme.fontSize.tagText};
  user-select: none;
`;

export { WithdrawClubButtonStyled };
