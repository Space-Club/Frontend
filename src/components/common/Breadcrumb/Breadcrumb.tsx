import {
  EVENT_DETAIL_BREADCRUMB,
  SUBMITTED_FORMS_BREADCRUMB,
  WRITE_APPLY_FORM_BREADCRUMB,
} from '@/constants/breadcrumb';
import useEventDetailQuery from '@/hooks/query/event/useEventDetailQuery';

import { useNavigate } from 'react-router-dom';

import { BreadcrumbContainer, CrumbStyled } from './Breadcrumb.style';

interface BreadcrumbProps {
  eventId: string;
  pageType: 'eventDetail' | 'submittedForms' | 'writeApplyForm';
}

type BreadcrumbItem = {
  title: string;
  link: string;
};

const Breadcrumb = ({ eventId, pageType }: BreadcrumbProps) => {
  const navigate = useNavigate();
  const { eventDetail } = useEventDetailQuery({ eventId });
  if (!eventDetail) {
    return null;
  }

  const { category, eventInfo, clubInfo } = eventDetail;
  let crumbs: BreadcrumbItem[] | null = [];

  switch (pageType) {
    case 'eventDetail':
      crumbs = EVENT_DETAIL_BREADCRUMB(category, eventId, eventInfo.title);
      break;
    case 'submittedForms':
      crumbs = SUBMITTED_FORMS_BREADCRUMB(category, eventId, clubInfo.clubId, eventInfo.title);
      break;
    case 'writeApplyForm':
      crumbs = WRITE_APPLY_FORM_BREADCRUMB(category, eventId, eventInfo.title);
      break;
    default:
      break;
  }

  return (
    <BreadcrumbContainer>
      {crumbs &&
        crumbs.map((crumb, index) => (
          <CrumbStyled key={index} onClick={() => navigate(crumb.link)}>
            {crumb.title}
          </CrumbStyled>
        ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
