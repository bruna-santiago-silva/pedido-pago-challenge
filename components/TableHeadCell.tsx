import styled from 'styled-components';

interface ITableHeadCell {
  title?: string;
  cellClass?: string;
}

const Th = styled.th`
  display: flex;
  align-items: center;
  width: 20%;
  height: 49px;
  font-size: 12px;
  font-weight: 400;
  color: #587169;
  padding: 0 16px;
  /* border: 1px solid green; */
`;

const TableHeadCell: React.FC<ITableHeadCell> = ({ title, cellClass }) => {
  return (
    <Th className={cellClass}>{title}</Th>
  )
}

export default TableHeadCell;