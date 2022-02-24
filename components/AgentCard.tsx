import { useState } from 'react';
import styled from 'styled-components';
import DownArrowIcon from './DownArrowIcon';
import UpArrowIcon from './UpArrowIcon';
import { IAgent, IStatus } from '../src/interfaces';
import AgentCardData from './AgentCardData';

interface IAgentCard {
  agent: IAgent;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 2px solid #B5F1DD;
`;

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

const Info = styled.div`
  display: flex;
`;

const AvatarContainer = styled.div`
  display: flex;
  width: 100%;
`;
// const Avatar = styled.img``;

const Avatar = styled.img<IStatus>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  opacity: ${ ({ status }) => status === 'active' ? 1 : 0.3};
`;

const Name = styled.div``;


const AgentCard: React.FC<IAgentCard>  = ({ agent }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container>
      <InfoContainer>
        <Title>Nome completo</Title>
        <AvatarContainer>
          <Info>
            <Avatar src={agent.image}/>
            <Name>{agent.name}</Name>
          </Info>
          {
            isOpen ? <DownArrowIcon setState={setIsOpen}/> : <UpArrowIcon setState={setIsOpen}/>
          }
        </AvatarContainer>
      </InfoContainer>
      { isOpen && <AgentCardData agent={agent} /> }
    </Container>
  )
}

export default AgentCard;
