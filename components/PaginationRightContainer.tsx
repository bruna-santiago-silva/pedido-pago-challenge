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
  /* border: 1px solid red; */
`;

const PagesAmount = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #587169;
`;

const PaginationRightContainer: React.FC<IPaginationRightContainer> = ({
  goToPreviousPage, currentPage, totalPages, goToNextPage
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
        <BackIcon />
      </Button>
      <PagesAmount>{`${currentPage} de ${totalPages}`}</PagesAmount>
      <Button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <NextIcon />
      </Button>
    </Container>
  )
}

export default PaginationRightContainer;
