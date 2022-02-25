import { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackPageIcon from './BackPageIcon';
import Header from './Header';
import LeftMenu from './LeftMenu';
import Main from './Main';
import PageTitle from './PageTitle';
import PageWrapper from './PageWrapper';
import PermissionsTable from './permissionsTable/PermissionsTable';
import { dataForPermissionsTableHead } from '../src/data';
import { challengeApi } from '../api/ChallengeApi';
import StyledTextField from './StyledTextField';

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  min-height: 1020px;
  background-color: #E5E5E5;
  padding: 50px 100px;

  @media only screen and (max-width: 1300px) {
    padding: 50px 0;
    width: 100%;
  }

`;

const Title = styled.div``;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 35px;
`;

const TextFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const RoleDesktop = () => {

  const [role, setRole] = useState({
    name: '',
    department: '',
    grouprules: [{
      role: '',
      permissions: ['']
    }]
  })

  const fetchRole = async () => {
    await challengeApi
      .getRole()
      .then(response => {
        setRole(response.role)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => { fetchRole() }, [])
  
  return (
    <PageWrapper>
      <Header /> 
      <Body>
        <LeftMenu />
        <RightContainer>
          <PageTitle>
            <BackPageIcon link='/'/>
            <Title>Cargos e permissões</Title>
          </PageTitle>
          <Main>
            <SubTitle>Dados do cargo</SubTitle>
            <TextFieldContainer>
              <StyledTextField label="Departamento" placeholder="SAC"/>
              <StyledTextField label="Cargo" placeholder="Analista"/>
            </TextFieldContainer>
            <SubTitle>Listagem de permissões</SubTitle>
            <PermissionsTable bodyData={role.grouprules} headerData={dataForPermissionsTableHead}/>
          </Main>
        </RightContainer>
      </Body>
    </PageWrapper>
  )
}

export default RoleDesktop;
