import useClubCommentMutation from '@/hooks/query/club/useClubCommentMutation';
import useMyProfile from '@/hooks/query/user/useMyProfile';

import { SubmitHandler, useForm } from 'react-hook-form';

import Avatar from '../common/Avatar/Avatar';
import {
  ButtonsWrapper,
  CommentButtonStyled,
  CommentTextareaStyled,
  InputsWrapper,
  PrivateWrapper,
  SpanStyled,
  TextareaWrapper,
  UserInfoWrapper,
  WriteCommentContainer,
} from './WriteClubComment.style';

interface WriteClubCommentValue {
  content: string;
  isPrivate: boolean;
}

interface WriteClubCommentProps {
  postId: string;
}

const WriteClubComment = ({ postId }: WriteClubCommentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteClubCommentValue>({
    defaultValues: {
      content: '',
      isPrivate: false,
    },
  });
  const { data } = useMyProfile();
  const { postComment } = useClubCommentMutation();

  if (!data) {
    return null;
  }

  const { username, profileImageUrl } = data;

  const onSubmit: SubmitHandler<WriteClubCommentValue> = (data, event) => {
    postComment({ postId, content: data.content, isPrivate: data.isPrivate });
    event?.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WriteCommentContainer>
        <UserInfoWrapper>
          <Avatar avatarSize="small" profileImageSrc={profileImageUrl} />
          <span>{username}</span>
        </UserInfoWrapper>
        <InputsWrapper>
          <TextareaWrapper>
            <CommentTextareaStyled
              {...register('content', {
                required: '댓글 내용은 필수입니다.',
                minLength: {
                  value: 1,
                  message: '2글자 이상 입력해야 합니다.',
                },
                maxLength: {
                  value: 500,
                  message: '500글자 이상 작성할 수 없습니다.',
                },
              })}
              placeholder={errors?.content ? errors.content.message : '댓글을 작성해주세요.'}
            />
          </TextareaWrapper>
          <ButtonsWrapper>
            <CommentButtonStyled>작성</CommentButtonStyled>
            <PrivateWrapper>
              <input {...register('isPrivate')} type="checkbox" id="isPrivate" />
              <SpanStyled>비밀댓글</SpanStyled>
            </PrivateWrapper>
          </ButtonsWrapper>
        </InputsWrapper>
      </WriteCommentContainer>
    </form>
  );
};

export default WriteClubComment;
