import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormInformationEditorContainer = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 6.25rem;
  max-height: 12rem;
  overflow-y: auto;
  border: 1px solid ${Theme.color.gray};
  border-radius: 1rem;
  padding: 0.94rem 1.64rem;

  :focus {
    outline: none;
  }
`;

export { FormInformationEditorContainer };
