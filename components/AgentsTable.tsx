import styled from 'styled-components';
import TableBodyRow from './TableBodyRow';
import TableHeadRow from './TableHeadRow';
import {IAgent, ITableHeadData} from '../src/interfaces';

interface IAgentsTable {
  bodyData?: IAgent[]
  headerData?: ITableHeadData[]
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

const AgentsTable: React.FC<IAgentsTable> = ({ bodyData, headerData }) => {
  return (
    <Table>
      <Thead>
        <TableHeadRow headerData={headerData} />
      </Thead>
      <Tbody>
        {bodyData.map((d) => {
          return (
            <TableBodyRow agent={d} />
          )
        })}
      </Tbody>
    </Table>
  )
}

export default AgentsTable;
