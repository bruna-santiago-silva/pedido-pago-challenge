import styled from 'styled-components';
import ThreeDotsIcon from './ThreeDotsIcon';

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

const TrBody = styled.tr`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */

  .nameBody {
    width: 44%;
    display: flex;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-self: center;
    width: 20%;
    height: 24px;
    background-color: #B5F1DD;
    border-radius: 80px;
    padding: 4px 8px;
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
  font-weight: 600;
  color: #587169;
  padding: 0 16px;
  /* border: 1px solid red; */
`;

const AvatarAgent = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const AgentName = styled.div`
  width: 60%;
  margin-left: 10px;
`;

const TableBodyRow: React.FC<ITableBodyRow> = ({ agent }) => {
  return (
    <TrBody key={agent.agent_id}>
      <Td className='nameBody'>
        <AvatarAgent src={agent.image}/>
        <AgentName>{agent.name}</AgentName>
      </Td>
      <Td className='departmentBody'>{agent.department}</Td>
      <Td className='roleBody'>{agent.role}</Td>
      <Td className='branchBody'>{agent.branch}</Td>
      <Td className='statusBody'>{agent.status === 'active' ? 'Ativo' : 'Inativo'}</Td>
      <Td className='dots'><ThreeDotsIcon /></Td>
    </TrBody>
  )
}

export default TableBodyRow;
