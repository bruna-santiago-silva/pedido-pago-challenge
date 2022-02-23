import styled from 'styled-components';
import ThreeDotsIcon from '../ThreeDotsIcon';

interface IStatus {
  status?: string;
}

interface ITableBodyRow {
  agent: {
    agent_id: number;
    image: string;
    name: string;
    department: string;
    role: string;
    branch: string;
    status: string;
  }
}

const Link = styled.a`
  text-decoration: none;
`;

const TrBody = styled.tr<IStatus>`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */

  .nameBody {
    width: 44%;
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  .departmentBody {
    width: 23%;
  }

  .roleBody {
    width: 20%;
  }

  .branchBody {
    width: 40%;
  }

  .statusBody {
    width: 20%; 
  }

  .dots {
    display: flex;
    justify-content: center;
    width: 10%;
  }
`;

const StatusContainer = styled.div<IStatus>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 72px;
  font-weight: 600;
  background-color: ${ ({ status }) => status === 'active' ? '#B5F1DD' : '#EAEFED'};
  color: ${ ({ status }) => status === 'active' ? '#587169' : '#A3B8B0'};
  border-radius: 80px;
  padding: 4px 8px;
`

const Td = styled.td<IStatus>`
  display: flex;
  align-items: center;
  width: 20%;
  height: 69px;
  border-bottom: 1px solid #EAEFED;
  font-size: 12px;
  font-weight: 400;
  color: ${ ({ status }) => status === 'active' ? '#587169' : '#A3B8B0'};
  padding: 0 16px;
  /* border: 1px solid red; */
`;

const AvatarAgent = styled.img<IStatus>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  opacity: ${ ({ status }) => status === 'active' ? 1 : 0.3};
`;

const AgentName = styled.div`
  width: 60%;
  margin-left: 10px;
`;

const TableBodyRow: React.FC<ITableBodyRow> = ({ agent }) => {
  const { agent_id, image, name, status, department, role, branch } = agent
  return (
    <Link href={'/details'}>
      <TrBody key={agent_id} status={status}>
        <Td className='nameBody' status={status}>
          <AvatarAgent src={image} status={status}/>
          <AgentName>{name}</AgentName>
        </Td>
        <Td className='departmentBody' status={status}>{department}</Td>
        <Td className='roleBody' status={status} >{role}</Td>
        <Td className='branchBody' status={status} >{branch}</Td>
        <Td className='statusBody'>
          <StatusContainer status={status}>
            {status === 'active' ? 'Ativo' : 'Inativo'}
          </StatusContainer>
        </Td>
        <Td className='dots' status={status} ><ThreeDotsIcon /></Td>
      </TrBody>
    </Link>
  )
}

export default TableBodyRow;
