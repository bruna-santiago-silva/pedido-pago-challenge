import styled from 'styled-components';
import { dataForAgentsTableHead } from '../src/data';
import { ITableHeadData } from '../src/interfaces';
import TableHeadCell from './TableHeadCell';

interface ITableHeadRow {
  headerData: ITableHeadData[]
}

const TrHead = styled.tr`
  display: flex;
  width: 100%;
  border: 1px solid #CAD6D1;
  border-radius: 8px 8px 0px 0px;
  /* border: 1px solid green; */

  .nameHeader {
    width: 45%;
  }

  .departmentHeader {
    width: 25%;
  }

  .roleHeader {
    width: 20%;
  }

  .branchHeader {
    width: 40%;
  }

  .statusHeader {
    width: 20%;
  }

  .empty {
    width: 10%;
    /* border: 1px solid red; */
  }
`;

const TableHeadRow: React.FC<ITableHeadRow> = ({ headerData }) => {
  return (
    <TrHead>
      {headerData.map((d) =>
        <TableHeadCell cellClass={d.class} title={d.title} />
      )}
    </TrHead>
  )
}

export default TableHeadRow;
