import styled from "styled-components";
import LogoIcon from "./LogoIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 61px;
  border-bottom: 1px solid #EAEFED;
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
  margin-right: 35%;
  margin-left: 16px;
`;

const HeaderMobile = () => {
  return(
    <Container>
      <UserAvatar>LZ</UserAvatar>
      <LogoIcon />
    </Container>
  )
}

export default HeaderMobile;
