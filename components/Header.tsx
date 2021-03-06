import styled from 'styled-components';
import LogoIcon from './LogoIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 61px;
  background-color: #FFFFFF;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 5%;
  height: 100%;
  border-right: 1px solid #EAEFED;
  margin-left: 32px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13%;
  height: 100%;
  border-left: 1px solid #EAEFED;

  @media only screen and (max-width: 1300px) {
    width: 18%;
  }

  @media only screen and (max-width: 900px) {
    width: 25%;
  }
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #B5F1DD;
  border-radius: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #34423D;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #34423D;
`;

const UserData = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #587169;
`;

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      <UserContainer>
        <UserAvatar>LZ</UserAvatar>
        <User>
          <UserName>Luiz Zlochevsky</UserName>
          <UserData>meus dados</UserData>
        </User>
      </UserContainer>
    </Container>
  )
}

export default Header;
