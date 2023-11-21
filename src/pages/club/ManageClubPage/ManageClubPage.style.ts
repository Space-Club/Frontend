import Button from '@/components/common/Button/Button';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const DeleteButton = styled(Button)`
  color: ${Theme.color.tSeparator};
  background-color: ${Theme.color.tWhiteGrey};

  &:hover {
    background-color: ${Theme.color.tSeparator};
    color: ${Theme.color.tWhiteGrey};
  }
`;

export { DeleteButton };
