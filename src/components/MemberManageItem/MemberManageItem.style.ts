import { ellipsisText } from '@/styles/common';
import styled from '@emotion/styled';

const MemberManageItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const MemberManageItemNameWrapper = styled(ellipsisText)`
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  padding: 0 0.8rem;
`;

const MemberManageItemButtonWrapper = styled.div`
  display: flex;
  width: 5.3rem;
  justify-content: space-between;
`;

export { MemberManageItemContainer, MemberManageItemButtonWrapper, MemberManageItemNameWrapper };
