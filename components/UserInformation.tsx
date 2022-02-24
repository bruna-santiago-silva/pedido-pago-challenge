import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;

  @media only screen and (max-width: 350px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;

  @media only screen and (max-width: 350px) {
    margin-bottom: 10px;
  }
`;

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #34423D;
`;

const UserEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #587169;
`;

const UserInformation = ({ agent }) => {
  return (
    <Container>
      <UserAvatar src={`${agent.image}`} />
      <UserDataContainer>
        <UserName>{agent.name}</UserName>
        <UserEmail>{agent.email}</UserEmail>
      </UserDataContainer>
    </Container>
  )
}

export default UserInformation;
