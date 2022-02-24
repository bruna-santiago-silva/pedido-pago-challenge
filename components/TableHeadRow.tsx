import styled from 'styled-components';
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

  .extraLarge {
    width: 80%;
  }

  .medium {
    width: 15%;
  }

  .extraBigCell {
    width: 44%;
  }

  .bigCell {
    width: 40%;
  }

  .mediumCell {
    width: 23%;
  }

  .smallCell {
    width: 20%;
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
      {headerData.map(d =>
        <TableHeadCell cellClass={d.class} title={d.title} key={d.title} />
      )}
    </TrHead>
  )
}

export default TableHeadRow;
