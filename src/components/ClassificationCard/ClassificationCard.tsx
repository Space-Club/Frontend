import { Container, Content, Example, Title, Wrapper } from './ClassificationCard.style';

interface ClassificationCard {
  title: string;
  content: string;
  exampleText: string;
  imgSrc: string;
  color: string;
}

const ClassificationCard = ({ title, content, exampleText, imgSrc, color }: ClassificationCard) => {
  return (
    <Container backColor={color}>
      <Wrapper img={imgSrc}>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Example>{exampleText}</Example>
      </Wrapper>
    </Container>
  );
};

export default ClassificationCard;