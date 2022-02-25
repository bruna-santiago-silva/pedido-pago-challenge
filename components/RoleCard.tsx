import { useState } from 'react';
import styled from 'styled-components';
import DownArrowIcon from './DownArrowIcon';
import UpArrowIcon from './UpArrowIcon';
import { IRole } from '../src/interfaces';
import RoleCardData from './RoleCardData';

interface IRoleCard {
  role: IRole;
}

interface IContainer {
  isOpen: boolean;
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: ${ ({ isOpen }) => isOpen ? '230px' : '65px'};
  background-color: #FFFFFF;
  border-radius: 8px;
  border: 2px solid ${ ({ isOpen }) => isOpen ? '#B5F1DD' : '#EAEFED'};
  margin-bottom: 10px;
`;

const HorizontalContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 94%;
  margin: ${ ({ isOpen }) => isOpen ? '24px 0 24px 16px' : '16px 0 32px 16px'};
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #587169;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DepartmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.div`
  font-size: 12px;
`;

const RoleCard: React.FC<IRoleCard>  = ({ role }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Container isOpen={isOpen}>
      <InfoContainer isOpen={isOpen}>
        <HorizontalContainer>
          <AvatarContainer>
            <Info>
              <Title>Cargo</Title>
              <Name>{role.name}</Name>
            </Info>
            { isOpen && <DepartmentInfo>
              <Title>Departamento</Title>
              <Name>{role.departament}</Name>
            </DepartmentInfo>}
            
          {
            isOpen ? <UpArrowIcon setState={setIsOpen} style={{marginRight: '20px'}}/> : <DownArrowIcon setState={setIsOpen} style={{marginRight: '20px'}}/>
          }
          </AvatarContainer>
        </HorizontalContainer>
      </InfoContainer>
      { isOpen && <RoleCardData role={role} /> }
    </Container>
  )
}

export default RoleCard;
