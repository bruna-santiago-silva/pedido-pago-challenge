import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import BackPageIcon from '../components/BackPageIcon';
import Header from '../components/Header';
import LeftMenu from '../components/LeftMenu';
import Main from '../components/Main';
import PageTitle from '../components/PageTitle';
import PageWrapper from '../components/PageWrapper';
import PermissionsTable from '../components/permissionsTable/PermissionsTable';
import { dataForPermissionsTableHead } from '../src/data';
import { challengeApi } from '../api/ChallengeApi';
import { IPermissions } from '../src/interfaces';
import StyledTextField from '../components/StyledTextField';
import HeaderMobile from '../components/HeaderMobile';

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RightContainer = styled.div`
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

export const Title = styled.div``;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #34423D;
  margin-bottom: 35px;
`;

export const TextFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const Permission: React.FC<IPermissions> = () => {

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

  useEffect(() => {fetchRole()}, [])

  
  return (
    <PageWrapper>
      <MediaQuery minWidth={500}>
        <Header /> 
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <HeaderMobile />
      </MediaQuery>
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

export default Permission;
