import { PATH } from './path';

const EVENT_DETAIL_BREADCRUMB = (category: string | undefined, eventId: string) => {
  if (category === 'SHOW') {
    return [
      { title: '공연', link: PATH.MAIN },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
    ];
  } else if (category === 'PROMOTION') {
    return [
      { title: '행사', link: PATH.MAIN_EVENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
    ];
  } else if (category === 'RECRUITMENT') {
    return [
      { title: '모집공고', link: PATH.MAIN_RECRUITMENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
    ];
  } else {
    return null;
  }
};

const SUBMITTED_FORMS_BREADCRUMB = (category: string, eventId: string, clubId: string) => {
  if (category === 'SHOW') {
    return [
      { title: '공연', link: PATH.MAIN },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '제출된 폼 보기', link: PATH.EVENT.SUBMITTED_FORMS(clubId, eventId) },
    ];
  } else if (category === 'PROMOTION') {
    return [
      { title: '행사', link: PATH.MAIN_EVENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '제출된 폼 보기', link: PATH.EVENT.SUBMITTED_FORMS(clubId, eventId) },
    ];
  } else if (category === 'RECRUITMENT') {
    return [
      { title: '모집공고', link: PATH.MAIN_RECRUITMENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '제출된 폼 보기', link: PATH.EVENT.SUBMITTED_FORMS(clubId, eventId) },
    ];
  } else {
    return null;
  }
};

const WRITE_APPLY_FORM_BREADCRUMB = (category: string, eventId: string) => {
  if (category === 'SHOW') {
    return [
      { title: '공연', link: PATH.MAIN },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '참여신청 폼 작성하기', link: PATH.EVENT.SUBMIT_FORM(eventId) },
    ];
  } else if (category === 'PROMOTION') {
    return [
      { title: '행사', link: PATH.MAIN_EVENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '참여신청 폼 작성하기', link: PATH.EVENT.SUBMIT_FORM(eventId) },
    ];
  } else if (category === 'RECRUITMENT') {
    return [
      { title: '모집공고', link: PATH.MAIN_RECRUITMENT },
      { title: '상세보기', link: PATH.EVENT.DETAIL(eventId) },
      { title: '참여신청 폼 작성하기', link: PATH.EVENT.SUBMIT_FORM(eventId) },
    ];
  } else {
    return null;
  }
};

export { EVENT_DETAIL_BREADCRUMB, SUBMITTED_FORMS_BREADCRUMB, WRITE_APPLY_FORM_BREADCRUMB };
