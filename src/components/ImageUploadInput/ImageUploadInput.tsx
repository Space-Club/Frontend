import ImageForm from '@/components/ImageForm/ImageForm';
import { ErrorMessage } from '@/pages/event/WriteEventInfoPage/WriteEventInfoPage.style';

import { useEffect, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';

interface ImageUploadInput {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  isRequired?: string | boolean;
  posterImageUrl?: string;
}

const ImageUploadInput = ({
  register,
  watch,
  errors,
  isRequired,
  posterImageUrl,
}: ImageUploadInput) => {
  const [imgFile, setImgFile] = useState(posterImageUrl ?? '');

  useEffect(() => {
    const imgSrc = watch('poster');
    if (imgSrc && imgSrc[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(imgSrc[0]);
      reader.onload = () => {
        setImgFile(reader.result as string);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('poster')]);

  return (
    <>
      <ImageForm
        {...register('poster', { required: isRequired })}
        imgFile={imgFile}
        labelText="포스터"
        required={!!isRequired}
        buttonText="이미지 선택하기"
      />
      {errors.poster && <ErrorMessage>{errors.poster.message as string}</ErrorMessage>}
    </>
  );
};

export default ImageUploadInput;
