import styled from 'styled-components';
import { IAgent, IStatus } from '../src/interfaces';
import CardInfoBox from './CardInfoBox';
import ShowActionsIcon from './ShowActionsIcon';

interface IAgentCardData {
  agent: IAgent;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Data = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  width: 100%;
`;

const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 6px;
`;

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 55px;
  margin-bottom: 20px;
  border: none;
  border: 2px solid #B5F1DD;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-top: 32px;
`;

const ButtonTitle = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const StatusContainer = styled.div<IStatus>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17px;
  width: 60px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${ ({ status }) => status === 'active' ? '#B5F1DD' : '#EAEFED'};
  color: ${ ({ status }) => status === 'active' ? '#587169' : '#A3B8B0'};
  border-radius: 80px;
  padding: 4px 8px;
`

const InfoContainer = styled.div`
  width: 50%;
  margin: 10px 0 0 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #587169;
  width: 100%;
`;


const AgentCardData: React.FC<IAgentCardData>  = ({ agent }) => {
  return (
    <Container>
      <HorizontalContainer>
        <CardInfoBox title='Departamento' data={agent.department} />
        <CardInfoBox title='Cargo' data={agent.role} />
      </HorizontalContainer>
      <HorizontalContainer>
        <CardInfoBox title='Documento' data={agent.branch} />
        <CardInfoBox title='Unidade' data={agent.branch} />
      </HorizontalContainer>
      <InfoContainer>
        <Title>Status</Title>
        <Data><StatusContainer>Ativo</StatusContainer></Data>
      </InfoContainer>
      <ActionButton>
        <ShowActionsIcon />
        <ButtonTitle>Ações</ButtonTitle>
      </ActionButton> 
    </Container>
  )
}

export default AgentCardData;
