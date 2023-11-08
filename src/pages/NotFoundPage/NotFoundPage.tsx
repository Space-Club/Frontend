import ActiveButton from '@/components/ActiveButton/ActiveButton';
import BigLogo from '@/components/common/BigLogo/BigLogo';
import { LOGO_TEXT } from '@/constants/logo';
import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import { PageContainer } from './NotFoundPage.style';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BigLogo logoText={LOGO_TEXT.ERROR} />
      <ActiveButton
        buttonText="홈으로 가기"
        fontSize="largeTitle"
        onClick={() => navigate(PATH.MAIN)}
      />
    </PageContainer>
  );
};

export default NotFoundPage;
