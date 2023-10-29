import Theme from '@/styles/Theme';
import { ActiveButtonProps } from '@/types/components';

export function getFontSize(fontSize: ActiveButtonProps['fontSize']) {
  return Theme.fontSize[fontSize];
}
