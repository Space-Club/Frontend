import React from 'react';

import { Container, Content, Example, Title, Wrapper } from './ClassificationCard.style';

interface ClassificationCard extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  exampleText: string;
  imgSrc: string;
  color: string;
}

const ClassificationCard = ({
  title,
  content,
  exampleText,
  imgSrc,
  color,
  ...props
}: ClassificationCard) => {
  return (
    <Container backColor={color} {...props}>
      <Wrapper img={imgSrc}>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Example>{exampleText}</Example>
      </Wrapper>
    </Container>
  );
};

export default ClassificationCard;
