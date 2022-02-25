import styled from 'styled-components';
import { ITableHeadData } from '../../src/interfaces';
import TableHeadCell from '../TableHeadCell';

interface ITableHeadRowMobile {
  headerData: ITableHeadData[]
}

const TrHead = styled.tr`
  display: flex;
  width: 100%;
  border: 1px solid #CAD6D1;
  border-radius: 8px 8px 0px 0px;

  .extraLarge {
    width: 40%;
    margin-left: 16px;
  }

  .medium {
    width: 20%;
    justify-content: center;
  }
`;

const TableHeadRowMobile: React.FC<ITableHeadRowMobile> = ({ headerData }) => {
  return (
    <TrHead>
      {headerData.map(d =>
        <TableHeadCell cellClass={d.class} title={d.title} key={d.title} />
      )}
    </TrHead>
  )
}

export default TableHeadRowMobile;
