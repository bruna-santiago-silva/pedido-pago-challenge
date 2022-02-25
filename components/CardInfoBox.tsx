import styled from 'styled-components';

interface ICardInfoBox {
  title: string;
  data: string;
  style?: any;
}

const Container = styled.div`
  width: 50%;
  margin: 10px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #587169;
  width: 100%;
`;

const Data = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  width: 100%;
`;

const CardInfoBox: React.FC<ICardInfoBox> = ({ title, data, style }) => {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Data>{data}</Data>
    </Container>
  )
}

export default CardInfoBox;

