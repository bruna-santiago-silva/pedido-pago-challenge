import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import RemoveIcon from './RemoveIcon';
import ViewIcon from './ViewIcon';

interface IAgentModalMobile {
  setState: Dispatch<SetStateAction<boolean>>;
  deleteAgent: (id: number) => void;
  agentId: number;
}

const Container = styled.div`
  position: absolute;
  top: 93%;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 143px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  z-index: 100;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #587169;
  margin-left: 16px;
`;

const ActionContainer = styled.div`
  display: flex;
  margin: 25px 0 17px 32px;
  cursor: pointer;
`;

const AgentModalMobile: React.FC<IAgentModalMobile> = ({ setState, deleteAgent, agentId }) => {
  return (
    <Container onClick={() => setState(false)}>
      <Link href={`/agents/${agentId}`}>
        <ActionContainer>
          <ViewIcon />
          <Title>Ver colaborador</Title>
        </ActionContainer>
      </Link>
      <ActionContainer onClick={() => deleteAgent(agentId)}>
        <RemoveIcon />
        <Title>Excluir</Title>
      </ActionContainer>
    </Container>
  )
}

export default AgentModalMobile;
