import { PATH } from './path';

const EVENT_DETAIL_BREADCRUMB = (category = '전체', eventId: string, title = '상세보기') => {
  const categoryTitle =
    category === 'SHOW' ? '공연' : category === 'PROMOTION' ? '행사' : '모집공고';
  const categoryPath =
    category === 'SHOW'
      ? PATH.MAIN
      : category === 'PROMOTION'
      ? PATH.MAIN_EVENT
      : PATH.MAIN_RECRUITMENT;

  return [
    { title: categoryTitle, link: categoryPath },
    { title: `${title}`, link: PATH.EVENT.DETAIL(eventId) },
  ];
};

const SUBMITTED_FORMS_BREADCRUMB = (
  category = '전체',
  eventId: string,
  clubId: string,
  title = '상세보기',
) => {
  return [
    ...EVENT_DETAIL_BREADCRUMB(category, eventId, title),
    { title: '제출된 폼', link: PATH.EVENT.SUBMITTED_FORMS(clubId, eventId) },
  ];
};

const WRITE_APPLY_FORM_BREADCRUMB = (category = '전체', eventId: string, title = '상세보기') => {
  return [
    ...EVENT_DETAIL_BREADCRUMB(category, eventId, title),
    { title: '참여신청 폼', link: PATH.EVENT.SUBMIT_FORM(eventId) },
  ];
};

export { EVENT_DETAIL_BREADCRUMB, SUBMITTED_FORMS_BREADCRUMB, WRITE_APPLY_FORM_BREADCRUMB };
