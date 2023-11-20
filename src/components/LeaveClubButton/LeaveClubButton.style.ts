import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { SemiPurpleButton } from '../SemiPurpleButton/SemiPurpleButton.style';

const LeaveClubButtonStyled = styled(SemiPurpleButton)`
  color: ${Theme.color.white};
  background-color: ${Theme.color.idkGrey};
  font-size: ${Theme.fontSize.tagText};
`;

export { LeaveClubButtonStyled };
