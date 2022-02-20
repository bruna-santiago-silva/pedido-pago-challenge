import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  /* height: 1200px; */
  height: 100%;
  border: 1px solid green;
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
  border: 1px solid black;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputSearch = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;

  .searchTextField {
    width: 100%;
    /* background-color: red; */
  }
`;

export const ListingContainer = styled.div`

`;

export const ListingTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
`;

// export const Table = styled.div`
//   width: 100%;
// `;

// export const Thead = styled.div`
//   width: 90%;
  
// `;

// export const Tbody = styled.div`
//   width: 90%;
// `;

// export const TrBody = styled.div`
//   display: flex;
//   width: 100%;
//   /* border: 1px solid red; */

//   .nameBody {
//     width: 44%;
//     display: flex;
//     align-items: center;
//   }

//   .departmentBody {
//     width: 23%;
//   }

//   .roleBody {
//     width: 20%;
//   }

//   .branchBody {
//     width: 40%;
//   }

//   .statusBody {
//     display: flex;
//     justify-content: center;
//     align-self: center;
//     width: 20%;
//     height: 24px;
//     background-color: #B5F1DD;
//     border-radius: 80px;
//     padding: 4px 8px;
//   }

//   .dots {
//     display: flex;
//     justify-content: center;
//     width: 10%;
//   }
// `;

// export const Td = styled.div`
//   display: flex;
//   align-items: center;
//   width: 20%;
//   height: 69px;
//   border-bottom: 1px solid #EAEFED;
//   font-size: 12px;
//   font-weight: 600;
//   color: #587169;
//   padding: 0 16px;
//   /* border: 1px solid red; */
// `;

// export const AvatarAgent = styled.img`
//   width: 32px;
//   height: 32px;
//   border-radius: 100%;
// `;

// export const AgentName = styled.div`
//   width: 60%;
//   margin-left: 10px;
// `;

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
  width: 37%;
  /* border: 1px solid red; */
`;


export const PaginationTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #587169;
`;

