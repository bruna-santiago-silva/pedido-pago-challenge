import { useState } from 'react';
import styled from 'styled-components';
import { IRole } from '../src/interfaces';
import CardInfoBox from './CardInfoBox';
import RoleModalMobile from './RoleModalMobile';
import ShowActionsIcon from './ShowActionsIcon';

interface IRoleCardData {
  role: IRole;
  deleteRole: (name: string, departament: string) => void;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 6px;
`;

const ActionButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 55px;
  margin-bottom: 24px;
  border: none;
  border: 2px solid #B5F1DD;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin-top: 29px;
`;

const ButtonTitle = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

const RoleCardData: React.FC<IRoleCardData>  = ({ role, deleteRole }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <Container>
      <HorizontalContainer>
        <CardInfoBox title='Colaboradores' data={String(role.agents_quantity)} style={{margin: '10px 0 0 10px'}}/>
      </HorizontalContainer>
      <ActionButton onClick={() => setShowModal(!showModal)}>
        <ShowActionsIcon />
        <ButtonTitle>Ações</ButtonTitle>
      </ActionButton> 
      {showModal &&
        <RoleModalMobile
          setState={setShowModal}
          deleteRole={deleteRole}
          name={role.name}
          departament={role.departament}
        />
      }
    </Container>
  )
}

export default RoleCardData;
