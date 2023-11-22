import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { ClubNoticeContainer } from '../ClubNotice/ClubNotice.style';

const EmptyClubNoticeWrapper = styled(ClubNoticeContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${Theme.color.gray};
`;

export { EmptyClubNoticeWrapper };
