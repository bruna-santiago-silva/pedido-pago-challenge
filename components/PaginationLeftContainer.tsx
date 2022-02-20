import { SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';
import { IAgent } from '../src/interfaces';
import Dropdown from './Dropdown';

interface IPaginationLeftContainer {
  itemsPerPage: number;
  agents: IAgent[];
  handleSelectItemsPerPage: (e: SelectChangeEvent<number>) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 37%;
  /* border: 1px solid red; */
`;


const PaginationTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #587169;
`;

const PaginationLeftContainer = ({itemsPerPage, agents, handleSelectItemsPerPage}) => {
  return (
    <Container>
      <PaginationTitle>
        {`Mostrando ${itemsPerPage > agents.length ? agents.length : itemsPerPage} de ${agents.length}`}
      </PaginationTitle>
      <Dropdown itemsPerPage={itemsPerPage} onChange={handleSelectItemsPerPage} values={[3, 5, 10]} />
    </Container>
  )
}

export default PaginationLeftContainer;
