import { PATH } from '@/constants/path';

interface BreadcrumbProps {
  category: 'SHOW' | 'PROMOTION' | 'RECRUITMENT' | 'CLUB';
  eventId: string;
  title: string;
  pageType: 'eventDetail' | 'submittedForms' | 'writeApplyForm';
  clubId?: string;
}

const getBreadcrumbs = ({ category, eventId, title, pageType, clubId }: BreadcrumbProps) => {
  const categoryTitle =
    category === 'SHOW' ? '공연' : category === 'PROMOTION' ? '행사' : '모집공고';
  const categoryPath =
    category === 'SHOW'
      ? PATH.MAIN
      : category === 'PROMOTION'
      ? PATH.MAIN_EVENT
      : PATH.MAIN_RECRUITMENT;

  const baseBreadcrumb = [
    { title: categoryTitle, link: categoryPath },
    { title: `${title}`, link: PATH.EVENT.DETAIL(eventId) },
  ];

  if (pageType === 'eventDetail') {
    return baseBreadcrumb;
  } else if (pageType === 'submittedForms' && clubId) {
    return [
      ...baseBreadcrumb,
      { title: '제출된 폼', link: PATH.EVENT.SUBMITTED_FORMS(clubId, eventId) },
    ];
  } else if (pageType === 'writeApplyForm') {
    return [...baseBreadcrumb, { title: '참여신청 폼', link: PATH.EVENT.SUBMIT_FORM(eventId) }];
  }
};

export { getBreadcrumbs };
