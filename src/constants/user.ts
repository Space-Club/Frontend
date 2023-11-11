import { DropDownOption } from '@/components/common/DropDown/DropDown';

const MEMBER_ROLE_DROPDOWN_OPTIONS: DropDownOption[] = [
  { value: 'MANAGER', label: '관리자' },
  { value: 'MEMBER', label: '회원' },
];

const FORM_STATUS_DROPDOWN_OPTIONS: DropDownOption[] = [
  { value: 'SELECT', label: '선택' },
  { value: 'CONFIRM', label: '확인' },
];

export { MEMBER_ROLE_DROPDOWN_OPTIONS, FORM_STATUS_DROPDOWN_OPTIONS };
