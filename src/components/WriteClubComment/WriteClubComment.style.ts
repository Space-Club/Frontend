import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const WriteCommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 20rem;
  padding: 1rem 1rem 5rem 1rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 5rem;
  font-size: ${Theme.fontSize.mediumContent};
`;

const InputsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 80%;
  min-width: 10rem;
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const CommentTextareaStyled = styled.textarea`
  width: 100%;
  border: 1px solid ${Theme.color.tSeparator};
  padding: 0.5rem;
  resize: none;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
  font-size: ${Theme.fontSize.smallContent};
`;

const CommentButtonStyled = styled.button`
  width: 3.5rem;
  height: 2.3125rem;
  outline: none;
  border: 0;
  color: white;
  background-color: ${Theme.color.tSemiPurple};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const PrivateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SpanStyled = styled.span`
  font-size: ${Theme.fontSize.tagText};
  color: ${Theme.color.tSeparator};
`;

export {
  WriteCommentContainer,
  UserInfoWrapper,
  InputsWrapper,
  CommentTextareaStyled,
  CommentButtonStyled,
  ButtonsWrapper,
  SpanStyled,
  PrivateWrapper,
  TextareaWrapper,
};
