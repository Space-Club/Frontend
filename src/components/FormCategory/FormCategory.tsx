import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

interface FormCategoryProps {
  formLength?: number;
  category?: string[];
}

const FormCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.2rem;
`;

const FormLengthStyled = styled.div`
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.mediumContent};
`;

const CategoryStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.875rem;
  height: 2.5rem;
  padding: 0 1rem;
  border-top: 1px solid ${Theme.color.textGrey};
  border-bottom: 1px solid ${Theme.color.textGrey};
  font-size: ${Theme.fontSize.smallTitle};
`;

const CategoryItemStyled = styled.span`
  width: fit-content;
  margin-right: 5rem;
`;

const FormCategory = ({
  formLength = 12,
  category = ['이름', '연락처', '나이', '성별'],
}: FormCategoryProps) => {
  return (
    <FormCategoryContainer>
      <FormLengthStyled>{`제출된 폼: ${formLength}`}</FormLengthStyled>
      <CategoryStyled>
        {category?.map((item) => {
          return <CategoryItemStyled>{item}</CategoryItemStyled>;
        })}
      </CategoryStyled>
    </FormCategoryContainer>
  );
};

export default FormCategory;
