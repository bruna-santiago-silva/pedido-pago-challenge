import styled from "styled-components";

const UserInformationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
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
    <UserInformationContainer>
      <UserAvatar src={`${agent.image}`} />
      <UserDataContainer>
        <UserName>{agent.name}</UserName>
        <UserEmail>{agent.email}</UserEmail>
      </UserDataContainer>
    </UserInformationContainer>
  )
}

export default UserInformation;
