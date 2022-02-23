import styled from 'styled-components';
import PermissionsTableRow from './PermissionsTableRow';
import TableHeadRow from '../TableHeadRow';
import { IGroupRules, ITableHeadData } from '../../src/interfaces';

interface IPermissionsTable {
  bodyData?: IGroupRules[];
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

const PermissionsTable: React.FC<IPermissionsTable> = ({ bodyData, headerData }) => {
  return (
    <Table>
      <Thead>
        <TableHeadRow headerData={headerData} />
      </Thead>
      <Tbody>
        {bodyData.map(data => {
          return (
            <PermissionsTableRow key={data.role} rule={data} />
          )
        })}
      </Tbody>
    </Table>
  )
}

export default PermissionsTable;
