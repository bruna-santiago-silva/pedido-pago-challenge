import styled from 'styled-components';
import TableBodyRow from '../agentsTable/AgentTableRow';
import TableHeadRow from '../TableHeadRow';
import {IAgent, IRole, ITableHeadData} from '../../src/interfaces';
import RolesTableRow from './RolesTableRow';

interface IRolesTable {
  bodyData: IRole[];
  headerData?: ITableHeadData[];
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

const RolesTable: React.FC<IRolesTable> = ({ bodyData, headerData }) => {
  return (
    <Table>
      <Thead>
        <TableHeadRow headerData={headerData} />
      </Thead>
      <Tbody>
        {bodyData.map(data => {
          return (
            <RolesTableRow key={`${data.name}-${data.departament}`} role={data} />
          )
        })}
      </Tbody>
    </Table>
  )
}

export default RolesTable;
