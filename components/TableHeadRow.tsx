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

  .extraLarge {
    width: 80%;
    padding-left: 16px;
  }

  .largeCell {
    width: 44%;
    margin-left: 16px;
  }

  .medium {
    width: 15%;
    justify-content: center;
  }

  .bigCell {
    width: 40%;
  }

  .mediumCell {
    width: 23%;
    margin-left: 16px;
  }

  .mediumCellNoMargin {
    width: 23%;
  }

  .smallCell {
    width: 20%;
  }

  .empty {
    width: 10%;
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
