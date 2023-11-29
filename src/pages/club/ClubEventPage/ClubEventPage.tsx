import ActiveButton from '@/components/ActiveButton/ActiveButton';
import ClubEvents from '@/components/ClubEvents/ClubEvents';
import ClubHeader from '@/components/ClubHeader/ClubHeader';
import { CREATE_EVENT } from '@/constants/club';
import { PATH } from '@/constants/path';

import { useNavigate, useParams } from 'react-router-dom';

import { ButtonWrapper, ContentContainer, ContentSpacer } from './ClubEventPage.style';

const ClubEventPage = () => {
  const navigate = useNavigate();
  const { clubId } = useParams();
  if (!clubId) throw new Error('클럽 ID를 찾을 수 없습니다');

  return (
    <>
      <ClubHeader clubId={clubId}></ClubHeader>
      <ContentSpacer />
      <ContentContainer>
        <ClubEvents clubId={clubId} />
      </ContentContainer>
      <ButtonWrapper>
        <ActiveButton
          buttonText={CREATE_EVENT.BUTTON_TEXT}
          fontSize="mediumContent"
          onClick={() => navigate(`${PATH.CLUB.CHOICE(clubId)}`)}
        />
      </ButtonWrapper>
    </>
  );
};

export default ClubEventPage;
