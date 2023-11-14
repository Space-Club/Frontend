import {
  CategoryItemStyled,
  CategoryRowStyled,
  CategoryStyled,
  ManageTitleStyled,
} from './Category.style';

interface CategoryProps {
  optionTitles: string[];
  managed: boolean;
}

const Category = ({ optionTitles, managed }: CategoryProps) => {
  const manageTitles = ['요청', '상태', '취소'];

  return (
    <CategoryStyled>
      <CategoryRowStyled>순서</CategoryRowStyled>
      {optionTitles.map((title, index) => {
        return <CategoryItemStyled key={index}>{title}</CategoryItemStyled>;
      })}
      {managed &&
        manageTitles.map((title, index) => {
          return <ManageTitleStyled key={index}>{title}</ManageTitleStyled>;
        })}
    </CategoryStyled>
  );
};

export default Category;
