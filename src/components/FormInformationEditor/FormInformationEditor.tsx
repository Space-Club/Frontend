import { useBoundStore } from '@/store/useBoundStore';

import { FormInformationEditorContainer } from './FormInformationEditor.style';

const FormInformationEditor = () => {
  const { setDescription } = useBoundStore();

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event.target.textContent !== null) {
      setDescription(event.target.value.trim());
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
