import styled from "styled-components";
import BackIcon from "./BackIcon";
import Button from "./Button";
import NextIcon from "./NextIcon";

interface IPaginationRightContainer {
  goToPreviousPage: () => void;
  currentPage: number;
  totalPages: number;
  goToNextPage: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  min-width: 150px;
`;

const PagesAmount = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #587169;
`;

const PaginationRightContainer: React.FC<IPaginationRightContainer> = ({
  goToPreviousPage, goToNextPage, currentPage, totalPages 
}) => {
  return (
    <Container>
      <Button
        style={{
          borderRadius: '8px 0px 0px 8px'
        }}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <BackIcon disabled={currentPage === 1}/>
      </Button>
      <PagesAmount>{`${currentPage} de ${totalPages}`}</PagesAmount>
      <Button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <NextIcon disabled={currentPage === totalPages} />
      </Button>
    </Container>
  )
}

export default PaginationRightContainer;
