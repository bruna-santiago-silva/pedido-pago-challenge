import { useState } from 'react';
import styled from 'styled-components';
import { IRole } from '../../src/interfaces';
import RoleModal from '../RoleModal';
import ThreeDotsIcon from '../ThreeDotsIcon';
import { IStatus } from '../../src/interfaces';

interface IRolesTableRow {
  role: IRole;
  deleteRole: (name: string, departament: string) => void;
}

const Link = styled.a`
  text-decoration: none;
`;

const TrBody = styled.tr<IStatus>`
  display: flex;
  width: 100%;

  .nameBody {
    width: 22%;
  }

  .departmentBody {
    width: 22%;
  }

  .roleBody {
    width: 20%;
  }

  .agentsQuantityBody {
    width: 40%;
  }

  .dots {
    display: flex;
    justify-content: center;
    width: 10%;
  }
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  width: 20%;
  height: 69px;
  border-bottom: 1px solid #EAEFED;
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  padding: 0 16px;
`;

const ModalContainer = styled.div`
  position: relative;
`

const RolesTableRow: React.FC<IRolesTableRow> = ({ role, deleteRole }) => {
  
  const [showModal, setShowModal] = useState(false)

  const { name, departament, agents_quantity } = role
  return (
    // <Link href={'/permission'}>
      <TrBody>
        <Td className='nameBody'>{name}</Td>
        <Td className='departmentBody'>{departament}</Td>
        <Td className='agentsQuantityBody'>{agents_quantity}</Td>
        <Td className='dots'>
          <ModalContainer>
            <ThreeDotsIcon setState={setShowModal} modalState={showModal}/>
            {showModal && 
              <RoleModal
                setState={setShowModal}
                deleteRole={deleteRole}
                name={name}
                departament={departament}
              />
            }
          </ModalContainer>
        </Td>
      </TrBody>
    // </Link>
  )
}

export default RolesTableRow;
