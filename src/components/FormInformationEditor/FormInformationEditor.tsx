import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import { FormInformationEditorContainer } from './FormInformationEditor.style';

const FormInformationEditor = () => {
  const { setDescription } = useContext(FormOptionContext);

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event.target.textContent !== null) {
      setDescription(event.target.value);
    }
  };

  return (
    <>
      <FormInformationEditorContainer
        placeholder="폼에 대한 설명을 작성해주세요!"
        onBlur={handleBlur}
        maxLength={1000}
      ></FormInformationEditorContainer>
    </>
  );
};

export default FormInformationEditor;
