import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormInformationEditorContainer = styled.textarea`
  width: 100%;
  min-height: 6.25rem;
  overflow-y: auto;
  border: 1px solid ${Theme.color.gray};
  border-radius: 1rem;
  padding: 0.94rem 1.64rem;
  margin-bottom: 1rem;

  :focus {
    outline: none;
  }
`;

export { FormInformationEditorContainer };
