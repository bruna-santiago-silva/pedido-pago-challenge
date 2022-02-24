import styled from 'styled-components';
import { IAgent, IStatus } from '../src/interfaces';
import AgentCardInfoBox from './AgentCardInfoBox';
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
  /* background-color: #B5F1DD;
  color: #587169; */
  border-radius: 80px;
  padding: 4px 8px;
`

const InfoContainer = styled.div`
  width: 50%;
  margin: 10px;
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
        <AgentCardInfoBox title='Departamento' data='' />
        <AgentCardInfoBox title='Cargo' data='' />
      </HorizontalContainer>
      <HorizontalContainer>
        <AgentCardInfoBox title='Documento' data='' />
        <AgentCardInfoBox title='Unidade' data='' />
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
