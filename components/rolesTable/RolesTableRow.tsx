import styled from 'styled-components';
import { IRole } from '../../src/interfaces';
import ThreeDotsIcon from '../ThreeDotsIcon';

interface IStatus {
  status?: string;
}

interface IRolesTableRow {
  role: IRole;
}

const Link = styled.a`
  text-decoration: none;
`;

const TrBody = styled.tr<IStatus>`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */

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
  /* border: 1px solid red; */
`;

const RolesTableRow: React.FC<IRolesTableRow> = ({ role }) => {
  const { name, departament, agents_quantity } = role
  return (
    <Link href={'/details'}>
      <TrBody>
        <Td className='nameBody'>{name}</Td>
        <Td className='departmentBody'>{departament}</Td>
        <Td className='agentsQuantityBody'>{agents_quantity}</Td>
        <Td className='dots'><ThreeDotsIcon /></Td>
      </TrBody>
    </Link>
  )
}

export default RolesTableRow;
