import {
  CategoryItemStyled,
  CategoryNthStyled,
  CategoryRowStyled,
  CategoryStyled,
  ManageTitleStyled,
} from './Category.style';

interface CategoryProps {
  optionTitles: string[];
  managed: boolean;
  isPerform: boolean;
}

const Category = ({ optionTitles, managed, isPerform }: CategoryProps) => {
  const manageTitles = ['요청', '상태', '취소'];

  return (
    <CategoryStyled>
      <CategoryNthStyled>순서</CategoryNthStyled>
      <CategoryRowStyled>제출시간</CategoryRowStyled>
      {isPerform && <CategoryNthStyled>인원</CategoryNthStyled>}
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
