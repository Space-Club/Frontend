import Theme from '@/styles/Theme';

import { useRef, useState } from 'react';
import { FaRegImage } from 'react-icons/fa';

import {
  ImageInputStyled,
  ImageLabelStyled,
  ImageTitle,
  ImageWrapper,
  InputWrapper,
  PreviewImage,
} from './ImageForm.style';

interface ImageForm {
  labelText: string;
  buttonText: string;
}

const ImageForm = ({ labelText, buttonText, ...props }: ImageForm) => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file!);
    reader.onloadend = () => {
      setImgFile(reader.result as string);
    };
  };

  const handleImageWrapperClick = () => {
    imgRef.current?.click();
  };

  return (
    <InputWrapper>
      <ImageTitle>{labelText}</ImageTitle>
      <ImageWrapper onClick={handleImageWrapperClick}>
        {imgFile ? (
          <PreviewImage src={imgFile} />
        ) : (
          <FaRegImage size="3rem" color={Theme.color.tLine} />
        )}
      </ImageWrapper>
      <ImageLabelStyled htmlFor={labelText}>{buttonText}</ImageLabelStyled>
      <ImageInputStyled
        id={labelText}
        type="file"
        accept="image/*"
        onChange={saveImgFile}
        ref={imgRef}
        {...props}
      />
    </InputWrapper>
  );
};

export default ImageForm;
