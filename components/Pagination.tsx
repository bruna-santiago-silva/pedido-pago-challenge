import { SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import PaginationLeftContainer from './PaginationLeftContainer';
import PaginationRightContainer from './PaginationRightContainer';

interface IPagination {
  setStateFunction: Dispatch<SetStateAction<any[]>>;
  data: any[];
  filteredData: any[];
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

const Pagination: React.FC<IPagination> = ({
  setStateFunction,
  data,
  filteredData
}) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const handleSelectItemsPerPage = (e: SelectChangeEvent<number>) => {
    setCurrentPage(1)
    const valueAsNumber = Number(e.target.value)
    setItemsPerPage(valueAsNumber)
    const slicedAgentsArray = data.slice(0, valueAsNumber)
    setStateFunction(slicedAgentsArray)
    let numberOfPages = data.length / valueAsNumber
    setTotalPages(Math.ceil(numberOfPages))
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleChangePage = () => {
    const offset = (currentPage -1) * itemsPerPage
    const slicedAgentsArray = data.slice(offset, offset+itemsPerPage)
    setStateFunction(slicedAgentsArray)
  }
  
  useEffect(() => { setTotalPages(Math.round(data.length / itemsPerPage)) }, [data])
  useEffect(() => { handleChangePage() }, [currentPage])
  return (
    <Container>
      <PaginationLeftContainer
        itemsPerPage={itemsPerPage}
        data={data}
        filteredData={filteredData}
        handleSelectItemsPerPage={handleSelectItemsPerPage}
      />
      <PaginationRightContainer
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Container>
  )
}

export default Pagination;
