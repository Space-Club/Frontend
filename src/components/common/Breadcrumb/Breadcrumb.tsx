import { useNavigate } from 'react-router-dom';

import { BreadcrumbContainer, CrumbStyled } from './Breadcrumb.style';

interface Crumb extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[] | null;
}

const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  const navigate = useNavigate();

  return (
    <BreadcrumbContainer>
      {crumbs?.map((crumb, index) => (
        <CrumbStyled key={index} onClick={() => navigate(crumb.link)}>
          {crumb.title}
        </CrumbStyled>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
