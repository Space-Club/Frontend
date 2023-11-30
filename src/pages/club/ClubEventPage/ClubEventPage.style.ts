import styled from '@emotion/styled';

const ContentSpacer = styled.div`
  height: 1.3rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 5rem;
`;

export { ContentContainer, ContentSpacer, ButtonWrapper };
