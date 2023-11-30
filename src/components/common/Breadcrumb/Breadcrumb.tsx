import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';
import { getBreadcrumbs } from '@/utils/getBreadcrumb';

import { useNavigate } from 'react-router-dom';

import { BreadcrumbContainer, CrumbStyled } from './Breadcrumb.style';

interface BreadcrumbProps {
  eventId: string;
  pageType: 'eventDetail' | 'submittedForms' | 'writeApplyForm';
}

const Breadcrumb = ({ eventId, pageType }: BreadcrumbProps) => {
  const navigate = useNavigate();
  const { eventDetail } = useEventDetailQuery({ eventId });
  if (!eventDetail) {
    return null;
  }

  const { category, eventInfo, clubInfo } = eventDetail;

  const crumbs = getBreadcrumbs({
    category,
    eventId,
    title: eventInfo.title,
    clubId: clubInfo.clubId,
    pageType,
  });

  return (
    <BreadcrumbContainer>
      {crumbs &&
        crumbs.map((crumb, index) => (
          <CrumbStyled
            key={index}
            onClick={() => {
              crumb.link && navigate(crumb.link);
            }}
          >
            {crumb.title}
          </CrumbStyled>
        ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
