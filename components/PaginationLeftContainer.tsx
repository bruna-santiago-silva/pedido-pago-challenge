import { SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';
import PaginationDropdown from './PaginationDropdown';

interface IPaginationLeftContainer {
  itemsPerPage: number;
  data: any[];
  handleSelectItemsPerPage: (e: SelectChangeEvent<number>) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37%;
  /* border: 1px solid red; */
  
  @media only screen and (max-width: 1300px) {
    /* margin-bottom: 10px; */
    width: 50%;
  }
`;

const PaginationTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #587169;

  @media only screen and (max-width: 1300px) {
    margin-right: 10px;
  }
`;

const PaginationLeftContainer: React.FC<IPaginationLeftContainer> = ({ itemsPerPage, data, handleSelectItemsPerPage }) => {
  return (
    <Container>
      <PaginationTitle>
        {`Mostrando ${itemsPerPage > data.length ? data.length : itemsPerPage} de ${data.length}`}
      </PaginationTitle>
      <PaginationDropdown itemsPerPage={itemsPerPage} onChange={handleSelectItemsPerPage} values={[3, 5, 10]} />
    </Container>
  )
}

export default PaginationLeftContainer;
