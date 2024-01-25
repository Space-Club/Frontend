import { useBoundStore } from '@/store/useBoundStore';
import { FormOption as FormOptionType } from '@/types/form';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, deleteOption, changeOptionTitle } = useBoundStore();

  const handleOptionTitleChange = (
    option: FormOptionType,
    event: React.FormEvent<HTMLTextAreaElement>,
  ) => {
    changeOptionTitle(option.id, event.currentTarget.value);
  };

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.id}
          option={option}
          onClose={deleteOption}
          onChange={(event) => handleOptionTitleChange(option, event)}
        />
      ))}
    </>
  );
};
export default FormOptions;
