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
  /* border: 1px solid green; */
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
  /* border: 1px solid black; */
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

