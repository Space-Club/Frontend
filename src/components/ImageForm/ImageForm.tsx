import Theme from '@/styles/Theme';

import { forwardRef } from 'react';
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
  imgFile: string;
}

const ImageForm = forwardRef<HTMLInputElement, ImageForm>(
  ({ labelText, buttonText, imgFile, ...props }, ref) => {
    return (
      <InputWrapper>
        <ImageTitle>{labelText}</ImageTitle>
        <ImageWrapper>
          {imgFile ? (
            <PreviewImage src={imgFile} />
          ) : (
            <FaRegImage size="3rem" color={Theme.color.tLine} />
          )}
        </ImageWrapper>
        <ImageLabelStyled htmlFor={labelText}>{buttonText}</ImageLabelStyled>
        <ImageInputStyled id={labelText} type="file" accept="image/*" ref={ref} {...props} />
      </InputWrapper>
    );
  },
);

export default ImageForm;
