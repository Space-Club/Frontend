import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LogoNInfoWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const ClubInfoWrapper = styled.div`
  display: flex;
`;

const MessageStyled = styled.p`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.smallTitle};
`;

const InviteInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export { PageContainer, LogoNInfoWrapper, ClubInfoWrapper, MessageStyled, InviteInfoWrapper };
