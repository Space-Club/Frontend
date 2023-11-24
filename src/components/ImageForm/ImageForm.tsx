import Theme from '@/styles/Theme';

import { forwardRef, useRef } from 'react';
import { FaRegImage } from 'react-icons/fa';

import { RequiredSquare } from '../common/InputForm/InputForm.style';
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
  required?: boolean;
  buttonText: string;
  imgFile: string;
}

const ImageForm = forwardRef<HTMLInputElement, ImageForm>(
  ({ labelText, required = false, buttonText, imgFile, ...props }, ref) => {
    const labelRef = useRef<HTMLLabelElement>(null);

    const handlePreviewClick = () => {
      if (labelRef && labelRef.current) {
        labelRef.current.click();
      }
    };

    return (
      <InputWrapper>
        <ImageTitle>
          {labelText}
          {required && <RequiredSquare />}
        </ImageTitle>
        <ImageWrapper onClick={handlePreviewClick}>
          {imgFile ? (
            <PreviewImage src={imgFile} />
          ) : (
            <FaRegImage size="3rem" color={Theme.color.tLine} />
          )}
        </ImageWrapper>
        <ImageLabelStyled htmlFor={labelText} ref={labelRef}>
          {buttonText}
        </ImageLabelStyled>
        <ImageInputStyled id={labelText} type="file" accept="image/*" ref={ref} {...props} />
      </InputWrapper>
    );
  },
);

export default ImageForm;
