import { SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';
import { IAgent } from '../src/interfaces';
import PaginationLeftContainer from './PaginationLeftContainer';
import PaginationRightContainer from './PaginationRightContainer';

interface IPagination {
  itemsPerPage: number;
  agents: IAgent[];
  handleSelectItemsPerPage: (e: SelectChangeEvent<number>) => void;
  goToPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

const Pagination: React.FC<IPagination> = ({
  itemsPerPage,
  agents,
  handleSelectItemsPerPage,
  goToPreviousPage,
  currentPage,
  totalPages,
  goToNextPage
}) => {
  return (
    <Container>
      <PaginationLeftContainer itemsPerPage={itemsPerPage} agents={agents} handleSelectItemsPerPage={handleSelectItemsPerPage} />
        <PaginationRightContainer
          goToPreviousPage={goToPreviousPage}
          currentPage={currentPage}
          totalPages={totalPages}
          goToNextPage={goToNextPage}
        />
    </Container>
  )
}

export default Pagination;
