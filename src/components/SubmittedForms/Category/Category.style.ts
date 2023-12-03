import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CategoryStyled = styled.div`
  display: flex;
  align-items: center;
  height: 2.2rem;
  border-top: 2px solid ${Theme.color.textGrey};
  border-bottom: 2px solid ${Theme.color.textGrey};
  font-size: ${Theme.fontSize.largeContent};
`;

const CategoryNthStyled = styled.div`
  min-width: 4rem;
  text-align: center;
`;

const CategoryRowStyled = styled.div`
  min-width: 10rem;
  text-align: center;
`;

const CategoryItemStyled = styled.div`
  width: 10rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ManageTitleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
`;

export {
  CategoryStyled,
  CategoryNthStyled,
  CategoryRowStyled,
  CategoryItemStyled,
  ManageTitleStyled,
};
