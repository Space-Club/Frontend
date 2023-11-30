import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  position: relative;
`;
const ImageTitle = styled.div`
  font-size: 1rem;
`;
const ImageWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.color.gray};
  width: 15rem;
  height: 20rem;
  margin-top: 0.5rem;
  cursor: pointer;
`;
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageLabelStyled = styled.label`
  position: absolute;
  bottom: 0;
  min-width: 8.5rem;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: ${Theme.color.tButton};
  text-align: center;
  color: white;
  cursor: pointer;
`;
const ImageInputStyled = styled.input`
  display: none;
`;

export { InputWrapper, ImageTitle, ImageWrapper, PreviewImage, ImageLabelStyled, ImageInputStyled };
