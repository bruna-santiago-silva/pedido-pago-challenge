import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import CopyIcon from './CopyIcon';
import EditIcon from './EditIcon';
import RemoveIcon from './RemoveIcon';
import ViewIcon from './ViewIcon';

interface IRoleModal {
  setState: Dispatch<SetStateAction<boolean>>;
  deleteRole: (name: string, departament: string) => void;
  name: string;
  departament: string;
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  height: 280px;
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
  margin-left: 32px;
  margin: 25px 0 17px 32px;
  cursor: pointer;
`;

const RoleModal: React.FC<IRoleModal> = ({ setState, deleteRole, name, departament }) => {
  return (
    <Container
      onClick={() => setState(false)}
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <Link href={'/permission'}>
        <ActionContainer>
          <ViewIcon />
          <Title>Ver cargo</Title>
        </ActionContainer>
      </Link>
      <ActionContainer>
        <EditIcon />
        <Title>Editar</Title>
      </ActionContainer>
      <ActionContainer>
        <CopyIcon />
        <Title>Duplicar</Title>
      </ActionContainer>
      <ActionContainer onClick={() => deleteRole(name, departament)}>
        <RemoveIcon />
        <Title>Excluir</Title>
      </ActionContainer>
    </Container>
  )
}

export default RoleModal;
