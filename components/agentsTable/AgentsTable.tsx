import styled from 'styled-components';
import AgentsTableRow from './AgentsTableRow';
import TableHeadRow from '../TableHeadRow';
import { IAgent, ITableHeadData } from '../../src/interfaces';

interface IAgentsTable {
  bodyData?: IAgent[]
  headerData?: ITableHeadData[]
  deleteAgent: (id: number) => void;
}

const Table = styled.table`
  width: 100%;
`;

const Thead = styled.thead`
  width: 90%;
`;

const Tbody = styled.tbody`
  width: 90%;
`;

const AgentsTable: React.FC<IAgentsTable> = ({ bodyData, headerData, deleteAgent }) => {
  return (
    <Table>
      <Thead>
        <TableHeadRow headerData={headerData} />
      </Thead>
      <Tbody>
        {bodyData.map(data => {
          return (
            <AgentsTableRow key={data.agent_id} agent={data} deleteAgent={deleteAgent}/>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default AgentsTable;
