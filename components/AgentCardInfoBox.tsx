import styled from 'styled-components';

interface IAgentCardInfoBox {
  title: string;
  data: string;
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

const AgentCardInfoBox: React.FC<IAgentCardInfoBox> = ({title, data}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Data>{data}</Data>
    </Container>
  )
}

export default AgentCardInfoBox;

