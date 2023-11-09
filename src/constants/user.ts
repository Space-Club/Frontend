import { DropDownOption } from '@/components/common/DropDown/DropDown';

import { PATH } from './path';
import { TAB_CONSTANTS } from './tab';

const MEMBER_ROLE_DROPDOWN_OPTIONS: DropDownOption[] = [
  { value: 'MANAGER', label: '관리자' },
  { value: 'MEMBER', label: '회원' },
];

const PROFILE_TABS = [
  { title: `${TAB_CONSTANTS.APPLIED_EVENT}`, link: `${PATH.PROFILE}` },
  { title: `${TAB_CONSTANTS.BOOKMARKED_EVENT}`, link: `${PATH.BOOKMARK}` },
];

export { MEMBER_ROLE_DROPDOWN_OPTIONS, PROFILE_TABS };
