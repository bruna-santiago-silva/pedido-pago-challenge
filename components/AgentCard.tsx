import { useState } from 'react';
import styled from 'styled-components';
import DownArrowIcon from './DownArrowIcon';
import UpArrowIcon from './UpArrowIcon';
import { IAgent, IStatus } from '../src/interfaces';
import AgentCardData from './AgentCardData';

interface IAgentCard {
  agent: IAgent;
}

interface IContainer {
  isOpen: boolean;
}

interface IAvatar {
  isOpen: boolean;
  status: string;
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: ${ ({ isOpen }) => isOpen ? '396px' : '89px'};
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 2px solid ${ ({ isOpen }) => isOpen ? '#B5F1DD' : '#EAEFED'};
  margin-bottom: 10px;
`;

const HorizontalContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 94%;
  margin: 16px 0 32px 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #587169;
  width: 100%;
  margin-bottom: 8px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.img<IAvatar>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  opacity: ${ ({ status }) => status === 'active' ? 1 : 0.3};
  border: 2px solid ${ ({ isOpen }) => isOpen ? '#1DD195' : '#EAEFED'};
`;

const Name = styled.div`
  margin-left: 8px;
`;

const AgentCard: React.FC<IAgentCard>  = ({ agent }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container isOpen={isOpen}>
      <InfoContainer>
        <Title>Nome completo</Title>
        <HorizontalContainer>
          <AvatarContainer>
            <Info>
              <Avatar src={agent.image} status={agent.status} isOpen={isOpen}/>
              <Name>{agent.name}</Name>
            </Info>
          </AvatarContainer>
          {
            isOpen ? <UpArrowIcon setState={setIsOpen} style={{marginRight: '20px'}}/> : <DownArrowIcon setState={setIsOpen} style={{marginRight: '20px'}}/>
          }
        </HorizontalContainer>
      </InfoContainer>
      { isOpen && <AgentCardData agent={agent} /> }
    </Container>
  )
}

export default AgentCard;
