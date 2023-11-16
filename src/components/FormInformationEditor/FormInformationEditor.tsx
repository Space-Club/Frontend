import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext, useEffect, useRef } from 'react';

import { FormInformationEditorContainer } from './FormInformationEditor.style';

const FormInformationEditor = () => {
  const { setDescription, description } = useContext(FormOptionContext);

  const informationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (informationRef.current) {
      informationRef.current.textContent = '폼에 대한 설명을 작성해주세요!';
    }
  }, [informationRef]);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (event.target.textContent !== null) {
      setDescription(event.target.textContent);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!description && event.target.textContent !== null) {
      event.target.textContent = '';
    }
  };

  return (
    <>
      <FormInformationEditorContainer
        ref={informationRef}
        contentEditable
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></FormInformationEditorContainer>
    </>
  );
};

export default FormInformationEditor;
