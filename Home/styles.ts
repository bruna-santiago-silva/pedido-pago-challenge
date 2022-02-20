import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 61px;
  background-color: #FFFFFF;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 1019px;
  /* border: 1px solid green; */
`;

export const LeftMenu = styled.div`
  width: 15%;
  height: 100%;
  background-color: #FFFFFF;
  /* border: 1px solid red; */
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  background-color: #E5E5E5;
  padding: 50px 100px;
  /* border: 1px solid black; */
`;

export const PageTitle = styled.div``;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 70%;
  height: 80%;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 50px 20px;
  /* border: 1px solid black; */

`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;


export const TabsContainer = styled.div`
  display: flex;
`;

export const Tab = styled.div``;

export const TabBar = styled.div``;

export const InputSearch = styled.div``;

export const ListingContainer = styled.div``;

export const ListingTitle = styled.div``;

export const Table = styled.div`
  width: 100%;
`;

export const Thead = styled.div`
  width: 90%;
`;

export const TrHead = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #CAD6D1;
  border-radius: 8px 8px 0px 0px;
  /* border: 1px solid green; */

  .nameHeader {
    width: 45%;
  }

  .departmentHeader {
    width: 25%;
  }

  .roleHeader {
    width: 20%;
  }

  .branchHeader {
    width: 40%;
  }

  .statusHeader {
    width: 20%;
  }

  .empty {
    width: 10%;
    /* border: 1px solid red; */
  }
`;

export const Th = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 40px;
  /* border: 1px solid green; */

  /* .nameHeader {
    width: 45%;
  }

  .departmentHeader {
    width: 25%;
  }

  .roleHeader {
    width: 20%;
  }

  .branchHeader {
    width: 40%;
  }

  .statusHeader {
    width: 30%;
  }

  .empty {
    width: 10%;
  } */
`;



export const Tbody = styled.div`
  width: 90%;
`;

export const TrBody = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */

  .nameBody {
    width: 45%;
    display: flex;
    align-items: center;
  }

  .departmentBody {
    width: 25%;
  }

  .roleBody {
    width: 20%;
  }

  .branchBody {
    width: 40%;
  }

  .statusBody {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 20%;
    height: 24px;
    background-color: #B5F1DD;
    border-radius: 80px;
    padding: 4px 8px;
  }

  .dots {
    display: flex;
    justify-content: center;
    width: 10%;
    
  }
`;

// export const TdNameContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 20%;
//   height: 70px;
//   border-bottom: 1px solid #EAEFED;
// `;

export const Td = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 70px;
  border-bottom: 1px solid #EAEFED;
  /* border: 1px solid red; */

  /* .nameBody {
    width: 45%;
  }

  .departmentBody {
    width: 25%;
  }

  .roleBody {
    width: 20%;
  }

  .branchBody {
    width: 40%;
  }

  .statusBody {
    width: 20%;
    background-color: #B5F1DD;
    border-radius: 80px;
    padding: 4px 8px;
  }

  .dots {
    width: 10%;
  } */
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

export const AgentName = styled.div`
  width: 60%;
  margin-left: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

export const PaginationLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 32%;
  /* border: 1px solid red; */
`;


export const PaginationTitle = styled.div``;

export const Pagination = styled.div``;

export const PaginationRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  /* border: 1px solid red; */

`;

