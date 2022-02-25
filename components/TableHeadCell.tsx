import styled from 'styled-components';

interface ITableHeadCell {
  title?: string;
  cellClass?: string;
}

const Th = styled.th`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 49px;
  font-size: 12px;
  font-weight: 600;
  color: #587169;
`;

const TableHeadCell: React.FC<ITableHeadCell> = ({ title, cellClass }) => {
  return (
    <Th className={cellClass}>{title}</Th>
  )
}

export default TableHeadCell;